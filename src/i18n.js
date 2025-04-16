import { createI18n } from "vue-i18n";


const messages = {
  en: {
    playerTitle: 'Players',
    resetPlayerTitleA11y: 'reset player names',
    resetPoints: 'Reset points',
    pointsInputTitle: '%{scoreType} points for player %{playerNum}',
    playerTotalTitle: 'total points for player %{playerNum}',
    total: 'Total',
    scoreTypes: ['Birds', 'Bonus cards', 'End-of-round goals', 'Eggs', 'Food on cards', 'Tucked cards', 'Nectar']
  },
  de: {
    playerTitle: 'Spieler',
    resetPlayerTitleA11y: 'Spielernamen zurücksetzen',
    resetPoints: 'Punkte zurücksetzen',
    pointsInputTitle: 'Punkte für %{scoreType} für Spieler %{playerNum}',
    playerTotalTitle: 'Gesamtpunkte für Spieler %{playerNum}',
    total: 'Gesamt',
    scoreTypes: ['Vögel', 'Bonuskarten', 'Rundenziele', 'Eier', 'Gelagertes Futter', 'Karten unter Vögeln', 'Nektar']
  },
  zh: {
    playerTitle: '玩家',
    resetPlayerTitleA11y: '重置玩家名',
    resetPoints: '重置分数',
    pointsInputTitle: '玩家%{playerNum}的%{scoreType}分数',
    playerTotalTitle: '玩家 %{playerNum} 总分',
    total: '总计',
    scoreTypes: ['鸟类牌', '奖励卡', '轮末目标', '鸟蛋', '储存的食物', '塞入的卡牌', '花蜜']
  },
  nl: {
    playerTitle: 'Spelers',
    resetPlayerTitleA11y: 'Spelersnamen opnieuw instellen',
    resetPoints: 'Punten wissen',
    pointsInputTitle: '%{scoreType} punten voor speler %{playerNum}',
    playerTotalTitle: 'totaal aantal punten voor speler %{playerNum}',
    total: 'Totaal',
    scoreTypes: ['Vogels', 'Bonuskaarten', '"Einde Ronde"-doelen', 'Eieren', 'Voedsel op kaarten', 'Weggestopte kaarten', 'Nektar']
  },
  uk: {
    playerTitle: 'Гравці',
    resetPlayerTitleA11y: 'скінуті імена гравців',
    resetPoints: 'Скинути бали',
    pointsInputTitle: '%{scoreType} балів у гравця %{playerNum}',
    playerTotalTitle: 'всього балів у гравця %{playerNum}',
    comingSoon: 'coming soon',
    total: 'Всього',
    scoreTypes: ['Птахи', 'Карти бонусів', 'Цілі раундів', 'Яйця', 'Корму на картах', 'Підкладені картки', 'Нектар']
  }
}

export const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages,
})
