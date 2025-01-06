<template>
  <div class="action player-count">
    <select v-model="playerCount">
      <option
        v-for="(p, i) in players"
        :key="p"
        :value="p"
      >
        {{ p }}
      </option>
    </select>
    <span>{{ $t('playerTitle') }}</span>
  </div>
</template>

<script>
export default {
  name: 'PlayerCountChooser',
  data () {
    return {
      players: [2, 3, 4, 5, 6, 7]
    }
  },
  computed: {
    playerCount: {
      get () {
        return this.$store.state.playerCount
      },
      set(value) {
        this.$store.commit('setPlayerCount', value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.action.player-count {
  font-family: $font-primary;
  display: flex;
  border-radius: $border-radius-default;
  background-color: $color-fg--light;

  span {
    border-top-right-radius: $border-radius-default;
    border-bottom-right-radius: $border-radius-default;
    background-color: $color-fg--light;
    color: $color-text;
    border: 0 solid $color-primary;
    padding: 0.25rem 1rem;
    font-family: $font-primary;
    font-weight: bold;
    letter-spacing: 0.01em;
    display: inline-block;
  }

  select {
    color: $color-text;
    font-weight: bold;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    appearance: none;
    border: 0;
    padding: 0.25rem 2rem 0.25rem 1rem;
    border-radius: $border-radius-default;
    background-color: $color-fg--light;
    background-image: url('../assets/img/arrow-down.svg');
    background-position: 80% 50%;
    background-repeat: no-repeat;

    &:hover {
      cursor: pointer;
      box-shadow: inset 0 0 0 2px $color-primary;
    }

    &:focus-visible {
      outline: none;
    }
  }
}
</style>
