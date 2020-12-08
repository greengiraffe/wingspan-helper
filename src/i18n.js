import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    playerTitle: 'Player',
    reset: 'Reset',
    resetPoints: 'Reset points',
    pointsInputTitle: '%{scoreType} points for player %{playerNum}',
    playerTotalTitle: 'total points for player %{playerNum}',
    comingSoon: 'coming soon',
    total: 'Total',
    scoreTypes: ['Birds', 'Bonus cards', 'End-of-round goals', 'Eggs', 'Food on cards', 'Tucked cards']
  },
  de: {
    playerTitle: 'Spieler',
    reset: 'Zurücksetzen',
    resetPoints: 'Punkte zurücksetzen',
    pointsInputTitle: 'Punkte für %{scoreType} für Spieler %{playerNum}',
    playerTotalTitle: 'Gesamtpunkte für Spieler %{playerNum}',
    comingSoon: 'kommt bald',
    total: 'Gesamt',
    scoreTypes: ['Vögel', 'Bonuskarten', 'Rundenziele', 'Eier', 'Gelagertes Futter', 'Karten unter Vögeln']
  }
}

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
