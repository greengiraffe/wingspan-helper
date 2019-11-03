module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss"; @import "@/styles/_mixins.scss";`
      }
    }
  },
  pwa: {
    name: "Wingspan Helper",
    themeColor: "#cae6f3",
    msTileColor: "#cae6f3",
    assetsVersion: "1.0",
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/icon-152x152.png',
      maskIcon: 'img/icons/maskable-icon.svg',
      msTileImage: 'img/icons/icon-144x144.png'
    }
  }
}
