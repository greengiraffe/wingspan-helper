import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n'

Vue.use(Vuex)

const defaultScores = i18n.t('scoreTypes').reduce((acc, value) => {
  acc[value] = -1
  return acc
}, {})

export default new Vuex.Store({
  state: {
    playerCount: 5,
    scoreTypes: i18n.t('scoreTypes'),
    players: {
      1: { scores: Object.assign({}, defaultScores), total: 0 },
      2: { scores: Object.assign({}, defaultScores), total: 0 },
      3: { scores: Object.assign({}, defaultScores), total: 0 },
      4: { scores: Object.assign({}, defaultScores), total: 0 },
      5: { scores: Object.assign({}, defaultScores), total: 0 }
    }
  },
  getters: {
    activePlayers: state => {
      return Object.fromEntries(Object.entries(state.players).slice(0, state.playerCount))
    },
    winners: (state, getters) => {
      // TODO
    }
  },
  mutations: {
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
    }
  }
})
