<template>
  <div
    class="table"
    :style="tableStyle"
  >
    <div class="row row--player">
      <div class="cell cell--label">
        <span>{{ $t('playerTitle') }}</span>
        <button
          v-show="touchedPlayerTitles"
          class="reset-names-btn"
          :title="$t('resetPlayerTitleA11y')"
          @click="resetPlayerTitles()"
        >
          X
        </button>
      </div>
      <div
        v-for="(player, playerNum) in activePlayers"
        :key="playerNum"
        class="cell cell--label cell--player-num cell--no-pad"
      >
        <input
          class="cell-input"
          type="string"
          :value="player.title"
          @click="$event.target.select()"
          @input="updatePlayerTitle($event, playerNum)"
        >
      </div>
    </div>

    <div
      v-for="(scoreType, i) in scoreTypes"
      :key="i"
      class="row"
    >
      <p class="cell cell--label">
        {{ localizedScoreTypes[i] }}
      </p>
      <div
        v-for="(player, playerNum) in activePlayers"
        :key="playerNum"
        class="cell cell--no-pad"
      >
        <input
          :id="scoreId(scoreType, playerNum)"
          class="cell-input"
          type="number"
          min="0"
          :title="label(localizedScoreTypes[i], playerNum)"
          :aria-label="label(localizedScoreTypes[i], playerNum)"
          :value="score(scoreType, playerNum) == -1 ? null : score(scoreType, playerNum)"
          @input="updateScore($event, playerNum, scoreType)"
        >
      </div>
    </div>

    <div class="row row--total">
      <div class="cell cell--label">
        <ToggleButton
          v-model="showResults"
          :name="$t('total')"
        />
      </div>
      <div
        v-for="(player, playerNum) in activePlayers"
        :key="playerNum"
        class="cell cell--total"
      >
        <span
          v-show="showResults"
          class="result"
          :class="{ winner: winnerIDs.includes(playerNum) }"
          :title="totalLabel(playerNum)"
        >
          {{ player.total }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ToggleButton from './ToggleButton.vue'

export default {
  name: 'ScoringTable',
  components: {
    ToggleButton
  },
  data () {
    return {
      showResults: false
    }
  },
  computed: {
    ...mapGetters(['activePlayers', 'winnerIDs']),
    ...mapState([
      'playerCount',
      'scoreTypes',
      'localizedScoreTypes',
      'showTotal',
      'touchedPlayerTitles'
    ]),
    tableStyle() {
      return {
        '--player-count': this.activePlayerCount()
      };
    }
  },
  methods: {
    score (scoreType, playerNum) {
      return this.activePlayers[playerNum].scores[scoreType]
    },

    scoreId (scoreType, playerNum) {
      return `player-${playerNum}-score-${scoreType
        .toLowerCase()
        .replace(/\s/, '-')}`
    },

    label (scoreType, playerNum) {
      return this.$t('pointsInputTitle', { playerNum, scoreType })
    },

    totalLabel (playerNum) {
      return this.$t('playerTotalTitle', { playerNum })
    },

    updateScore (event, playerNum, scoreType) {
      const value = event.target.value
      let score = Number.parseInt(value)
      // Treat empty input as 0, not -1 which was used internally before
      if (value.length === 0) {
        score = 0 // Or potentially -1 if you want to revert to that logic explicitly
      } else if (isNaN(score) || score < 0) {
        // Ensure score is a non-negative number or handle empty/invalid input
        event.target.value = '' // Clear invalid input
        score = 0 // Or -1 if that's your placeholder for empty
      }
      // Consider adding validation feedback if needed: event.target.setCustomValidity(...)

      this.$store.commit('setPlayerScore', {
        playerNum,
        scoreType,
        score
      })
    },

    activePlayerCount () {
      return Object.keys(this.activePlayers).length
    },

    updatePlayerTitle (event, playerNum) {
      const title = event.target.value
      this.$store.commit('setPlayerTitle', {
        playerNum,
        title
      })
    },

    resetPlayerTitles () {
      this.$store.commit('resetPlayerTitles', {})
    }
  }
}
</script>

<style scoped lang="scss">

.table {
  display: grid;
}

.row {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(8.5rem, 1fr) repeat(var(--player-count, 1), minmax(0, 1fr));
  text-align: center;

  @include break-phone {
    grid-template-columns: minmax(11.5rem, 1fr) repeat(var(--player-count, 1), minmax(0, 1fr));
  }

  + .row {
    border-top: 1px solid $color-border;
  }

  + .row--total {
    border-top-width: 2px;
  }
}


.row--player {
  font-weight: bold;

  + .row {
    border-top-width: 2px;
  }
}

.reset-names-btn {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
  border: 2px solid $color-primary;
  color: $color-primary;
  padding: 0 0.75rem;
  margin-left: auto;
}

.cell {
  margin: 0;
  padding: 0.25rem;
  min-width: 0;

  @include break-phone {
    padding: 0.5rem
  }

  + .cell {
    border-left: 1px solid $color-border;
  }
}

.cell--label {
  display: flex;
  align-items: center;
  font-family: $font-primary;
  letter-spacing: 0.02rem;
  font-size: 1.2rem;
  text-align: left;

  @include break-phone {
    font-size: 1.5rem;
  }
}

// fix overly large letter spacing in cyrillic
:global(html[lang="uk"] .cell--label)  {
  letter-spacing: -0.02em;
}

.cell--player-num {
  text-align: center;
}

.cell--total {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cell--no-pad {
  padding: 0;
}

.cell--player-num .cell-input {
  background-color: inherit;
}

.cell-input {
  background-color: $color-fg--light;
  width: 100%;
  height:  100%;
  border: 0;
  text-align: center;

  &:focus {
  outline: 0;
    box-shadow: $shadow-focus;
  }

  &:invalid {
    box-shadow: $shadow-focus--invalid;
    outline: 0;
  }
}

.result.winner {
  border-bottom: 3px solid currentColor;
}

</style>
