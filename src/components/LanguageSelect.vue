<template>
  <div class="action language-select">
    <select v-model="language">
      <option
        v-for="(lang, i) in langs"
        :key="lang"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelect',
  data() {
    return {
      langs: [
        'en',
        'de',
        'zh',
        'uk'
      ],
    }
  },
  computed: {
    language: {
      get() {
        return this.$store.state.language
      },
      set(value) {
        this.$store.dispatch('setLanguage', value)
      }
    }
  },
}
</script>

<style scoped lang="scss">
.action.language-select {
  font-family: $font-primary;

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
