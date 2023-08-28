<template>
  <div class="action">
    <select v-model="currentLanguage">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LanguageToggle',
  data () {
    return {
      langs: [
        'en',
        'de',
        'zh'
      ],
      currentLanguage: 'en'
    }
  },
  methods: {
    ...mapActions(['setLanguage'])
  },
  watch: {
    currentLanguage (v) {
      this.setLanguage(v)
    }
  }
}
</script>

<style>

</style>
