<template>
  <div class="scoresheet">
    <ScoringTable />
    <div class="action-bar">
      <PlayerCountChooser />
      <LanguageSelect />
      <button
        class="action reset"
        @click="reset()"
      >
        {{ $t('resetPoints') }}
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ScoringTable from '@/components/ScoringTable.vue'
import PlayerCountChooser from '@/components/PlayerCountChooser.vue'
import LanguageSelect from '@/components/LanguageSelect.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Scoresheet',
  components: {
    ScoringTable,
    PlayerCountChooser,
    LanguageSelect
  },
  methods: {
    reset () {
      this.$store.commit('resetAllScores')
    }
  }

}
</script>
<style lang="scss">
  .action-bar {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include break-phone {
      justify-content: flex-end;
      flex-direction: row;
    }
  }

  .action + .action {
    margin-left: 0.5rem;
    margin-top: 0.5rem;

    @include break-phone {
      margin-left: 1rem;
      margin-top: 0;
    }
  }

  .action.reset {
    white-space: nowrap;
  }

</style>
