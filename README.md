# Wingspan Helper

A small website dedicated to the beautiful boardgame [Wingspan](https://stonemaiergames.com/games/wingspan/) by Elizabeth Hargrave (Stonemaier Games). It currently provides a digital scoreboard. A companion for the Automata for solo playing is planned.

Try it out: https://wingspan-helper.now.sh/

You can add the app to your homescreen and use it offline if you want, it's a progressive web app. :)

This project is licensed under the terms of the MIT license. Feel free to contribute here on GitHub by creating bug reports or pull requests.

## Credits

This is an independent open source project, it is not related to Stonemaier Games or the original boardgame Wingspan in any way. The graphic of the scissor-tailed flycatcher used as the app icon and for the site header is based on the original artwork by [Natalia Rojas](https://www.nataliarojasart.com/). The handwritten typeface used is Cardenio Modern by [Nils Cordes](http://nilscordes.com/).

## Development

The website is a single page application based on [Vue.js](https://vuejs.org/) and [vue-cli](https://cli.vuejs.org/).

### Project setup

You need to have [Yarn](https://yarnpkg.com/en/) installed.

```sh
# clone the repository
git clone https://github.com/greengiraffe/wingspan-helper.git

# change into the project folder
cd wingspan-helper

# Setup all dependencies
yarn install

# Run the development server
yarn run serve
```

### Commands

- `yarn run serve` – Compiles and hot-reloads for development
- `yarn run build` – Compiles and minifies for production
- `yarn run lint` – Lints and fixes files
