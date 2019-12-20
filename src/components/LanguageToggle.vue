<template>
  <div class="action">
    <button @click="toggleLanguage">{{ currentLanguage }}</button>
  </div>
</template>

<script>
export default {
  name: 'LanguageToggle',
  computed: {
    currentLanguage () {
      return this.$store.state.language === 'en' ? 'de' : 'en'
    }
  },
  methods: {
    toggleLanguage () {
      this.$store.dispatch('toggleLanguage')
    }
  }
}
</script>

<style>

</style>
