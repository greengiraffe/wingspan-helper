import {createI18n} from "vue-i18n";


const messages = {
  en: {
    playerTitle: 'Players',
    resetPlayerTitleA11y: 'reset player names',
    resetPoints: 'Reset points',
    pointsInputTitle: '%{scoreType} points for player %{playerNum}',
    playerTotalTitle: 'total points for player %{playerNum}',
    comingSoon: 'coming soon',
    total: 'Total',
    scoreTypes: ['Birds', 'Bonus cards', 'End-of-round goals', 'Eggs', 'Food on cards', 'Tucked cards', 'Nectar']
  },
  de: {
    playerTitle: 'Spieler',
    resetPlayerTitleA11y: 'Spielernamen zurücksetzen',
    resetPoints: 'Punkte zurücksetzen',
    pointsInputTitle: 'Punkte für %{scoreType} für Spieler %{playerNum}',
    playerTotalTitle: 'Gesamtpunkte für Spieler %{playerNum}',
    comingSoon: 'kommt bald',
    total: 'Gesamt',
    scoreTypes: ['Vögel', 'Bonuskarten', 'Rundenziele', 'Eier', 'Gelagertes Futter', 'Karten unter Vögeln', 'Nektar']
  }
}

export const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages,
})
