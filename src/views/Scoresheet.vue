<template>
  <div class="home">
    <!-- <Slider v-model.number="playerCount"/> -->
    <ScoringTable />
    <div class="action-bar">
      <div class="action player-count">
        <button
          v-for="p in players"
          :key="p"
          :class="{ active: (p === playerCount) }"
          @click="$store.commit('setPlayerCount', p)"
        >{{ p }}</button>
        <span>Players</span>
      </div>
      <button class="action reset" @click="reset()">Reset Points</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScoringTable from '@/components/ScoringTable.vue'
import Slider from "@/components/Slider.vue"

export default {
  name: 'home',
  components: {
    ScoringTable,
    Slider
  },
  data () {
    return {
      players: [2,3,4,5]
    }
  },
  computed: {
    playerCount: {
      get () {
        return this.$store.state.playerCount
      }
    }
  },
  methods: {
    reset() {
      this.$store.commit('resetAllScores')
    },
    setPlayerCount(num) {
      this.$store.commit('setPlayerCount', playerCount)
    }
  }

}
</script>
<style lang="scss" scoped>
  .action-bar {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .action + .action {
    margin-left: 0.5rem;

    @include break-phone {
      margin-left: 1rem;
    }
  }

  .action.player-count {
    border-radius: $border-radius-default;

    button {
      border-radius: 0;
      background-color: $color-fg--light;
      color: $color-text;
      padding: 0.25rem 0.5rem;

      @include break-phone {
        padding: 0.25rem 1rem;
      }

      &:hover, &:focus {
        box-shadow: inset 0 0 0 2px $color-primary;
      }

      &.active {
        background-color: $color-primary;
        color: $color-fg;
      }

      &:first-child {
        border-top-left-radius: $border-radius-default;
        border-bottom-left-radius: $border-radius-default;
      }
    }

    span {
      border-top-right-radius: $border-radius-default;
      border-bottom-right-radius: $border-radius-default;
      // box-shadow: inset 0 0 0 2px $color-primary;
      background-color: $color-fg--light;
      color: $color-text;
      border: 0 solid $color-primary;
      padding: 0.25rem 1rem;
      font-family: $font-primary;
      font-weight: bold;
      letter-spacing: 0.01em;
      display: inline-block;
    }
  }

</style>
