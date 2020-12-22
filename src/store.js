import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n'

Vue.use(Vuex)

const scoreTypes = i18n.t('scoreTypes', 'en')
const stateStorageKey = 'state'

// transform labels array to object keys
const defaultScores = scoreTypes.reduce((acc, value) => {
  acc[value] = -1
  return acc
}, {})

// store the updated state every mutation
const localStoragePlugin = store => {
  // called when the store is initialized
  if (localStorageAvailable()) {
    store.subscribe((mutation, state) => {
      // called after every mutation.
      localStorage.setItem('state', JSON.stringify(state))
    })
  }
}

const localStorageAvailable = () => {
  let storage
  try {
    storage = window.localStorage
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0)
  }
}

const loadState = () => {
  let state = defaultState
  if (localStorageAvailable()) {
    try {
      state = JSON.parse(localStorage.getItem(stateStorageKey))
    } catch (e) {
      // corrupt, nevermind
      localStorage.removeItem(stateStorageKey)
    }
    if (!state || typeof state !== 'object' || defaultState.version !== state.version) {
      localStorage.removeItem(stateStorageKey)
      state = defaultState
    }
  }
  return state
}

const defaultState = {
  version: 2, // bump this every time the state schema changes
  language: 'en',
  playerCount: 5,
  scoreTypes,
  localizedScoreTypes: i18n.t('scoreTypes'),
  touchedPlayerTitles: false,
  players: {
    1: { scores: Object.assign({}, defaultScores), total: 0, title: '1' },
    2: { scores: Object.assign({}, defaultScores), total: 0, title: '2' },
    3: { scores: Object.assign({}, defaultScores), total: 0, title: '3' },
    4: { scores: Object.assign({}, defaultScores), total: 0, title: '4' },
    5: { scores: Object.assign({}, defaultScores), total: 0, title: '5' }
  }
}

export default new Vuex.Store({
  state: loadState(),
  plugins: [localStoragePlugin],
  getters: {
    activePlayers: state => {
      return Object.fromEntries(Object.entries(state.players).slice(0, state.playerCount))
    },
    winnerIDs: (state, getters) => {
      return Object.entries(getters.activePlayers) // object to array: [[playerId, playerObject],...]
        .sort((a, b) => b[1].total - a[1].total) // highest scores first
        .filter((current, i, array) => {
          // remove 0-scores
          if (current[1].total === 0) return false
          // keep (possibly multiple) winners, discard others
          return current[1].total >= array[0][1].total
        })
        .map(v => v[0]) // get winner IDs (as strings!)
    }
  },
  mutations: {
    setLanguage (state, payload) {
      state.language = payload
      state.localizedScoreTypes = i18n.t('scoreTypes')
    },
    setPlayerCount (state, payload) {
      state.playerCount = payload
    },
    setPlayerScore (state, payload) {
      const player = state.players[payload.playerNum]
      player.scores[payload.scoreType] = payload.score
      const total = Object.values(player.scores).reduce((a, b) => {
        if (a < 0 && b < 0) {
          return 0
        } else if (a < 0) {
          return b
        } else if (b < 0) {
          return a
        } else {
          return a + b
        }
      }, 0)
      player.total = total
    },
    resetPlayerScore (state, payload) {
      state.players[payload.player].scores = Object.assign({}, defaultScores)
      state.players[payload.player].total = 0
    },
    resetAllScores (state, payload) {
      for (let i = 1; i <= 5; i++) {
        state.players[i].scores = Object.assign({}, defaultScores)
        state.players[i].total = 0
      }
    },
    setPlayerTitle (state, payload) {
      state.players[payload.playerNum].title = payload.title
      state.touchedPlayerTitles = true
    },
    resetPlayerTitles (state, payload) {
      for (let i = 1; i <= 5; i++) {
        state.players[i].title = i
      }
      state.touchedPlayerTitles = false
    }
  },
  actions: {
    setLanguage ({ commit }, language) {
      document.documentElement.setAttribute('lang', language)
      i18n.locale = language
      commit('setLanguage', language)
    },

    toggleLanguage ({ state, dispatch }) {
      const newLang = state.language === 'en' ? 'de' : 'en'
      dispatch('setLanguage', newLang)
    }
  }
})
