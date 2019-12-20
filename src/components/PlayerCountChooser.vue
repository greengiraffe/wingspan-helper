<template>
  <div>
        <button
          v-for="p in players"
          :key="p"
          :class="{ active: (p === playerCount) }"
          @click="$store.commit('setPlayerCount', p)"
        >{{ p }}</button>
        <span>{{ $t('playerTitle') }}</span>
      </div>
</template>

<script>
export default {
  name: 'player-count-chooser',
  data () {
    return {
      players: [2, 3, 4, 5]
    }
  },
  computed: {
    playerCount: {
      get () {
        return this.$store.state.playerCount
      }
    }
  }
}
</script>

<style>

</style>
