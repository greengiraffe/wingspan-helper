import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    playerTitle: 'player',
    resetPoints: 'reset points',
    pointsInputTitle: '%{scoreType} points for player %{playerNum}',
    playerTotalTitle: 'total points for player %{playerNum}',
    comingSoon: 'coming soon',
    total: 'total',
    scoreTypes: ['birds', 'bonus cards', 'end-of-round goals', 'eggs', 'food on cards', 'tucked cards']
  },
  de: {
    playerTitle: 'Spieler',
    resetPoints: 'Punkte zurücksetzen',
    pointsInputTitle: 'Punkte für %{scoreType} für Spieler %{playerNum}',
    playerTotalTitle: 'Gesamtpunkte für Spieler %{playerNum}',
    comingSoon: 'kommt bald',
    total: 'gesamt',
    scoreTypes: ['Vögel', 'Bonuskarten', 'Rundenziele', 'Eier', 'Gelagertes Futter', 'Karten unter Vögeln']
  }
}

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
