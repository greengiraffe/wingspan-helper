<template>
  <div id="wrapper">
    <img id="logo" src="./assets/img/logo.svg" alt="Wingspan Helper logo" />

    <div id="app">
      <nav id="nav">
        <router-link to="/" class="nav-item scoresheet">Scoresheet</router-link>
        <span class="nav-item automata" title="The automata feature is not implemented yet">
          Automata
          <div class="coming-soon">{{ $t('comingSoon') }}</div>
        </span>
      </nav>
      <main id="main">
        <router-view />
      </main>
      <footer id="footer">
        Contribute on
        <a href="https://github.com/greengiraffe/wingspan-helper">GitHub</a> •
        <em>Cardenio Modern</em> typeface by
        <a href="http://nilscordes.com/">Nils Cordes</a>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import "styles/main.scss";

#wrapper {
  max-width: $app-width;
  margin: 0 auto;
  padding: $app-padding;
  text-align: center;

  @include break-phone {
    margin: auto;
  }
}

#logo {
  position: relative;
  display: inline-block;
  height: 5rem;
  margin: 0.5rem 0 1rem;

  @include break-phone {
    height: 7rem;
    margin: 1rem 0;
  }
}

#app {
  background-color: $color-fg--dark;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 47px 0px rgb(66, 61, 55);
  border: 5px solid $color-fg--dark;
  border-radius: $border-radius-default;
}

#main {
  position: relative;
  padding: 1rem 0.5rem;
  flex: 1;
  background-color: $color-fg;
  border-top-right-radius: $border-radius-default;
  border-bottom-left-radius: $border-radius-default;
  border-bottom-right-radius: $border-radius-default;
  background-clip: border-box;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);

  @include break-phone {
    padding: 1rem;
  }
}

#nav {
  font-family: $font-primary;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  background-color: $color-fg--dark;
  line-height: 1;

  @include break-phone {
    font-size: 2rem;
  }
}

.nav-item {
  position: relative;
  font-weight: bold;
  color: $color-text;
  text-decoration: none;
  width: 100%;
  padding: 1rem;
  text-align: center;

  @include break-phone {
    padding: 1rem;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
    outline: 0;
  }

  &.router-link-active {
    color: $color-primary;
    background-color: $color-nav-bg--active;
  }

  &.scoresheet {
    border-top-left-radius: $border-radius-default;
    border-top-right-radius: $border-radius-default;
    position: relative;

    &::after {
      // this is overlayed by the inactive automata tab
      // that has a rounded corner, it makes the rounded
      // edge of the tab visible
      content: "";
      position: absolute;
      width: $border-radius-default;
      height: $border-radius-default;
      bottom: 0;
      right: -$border-radius-default;
      background-color: $color-fg;
    }
  }

  &.automata {
    background-color: $color-fg--dark;
    border-bottom-left-radius: $border-radius-default;
    border-top-right-radius: $border-radius-default;
    font-size: 1.25rem;
    padding: 0.75rem 1rem;
    line-height: 1;

    @include break-phone {
      font-size: 1.5rem;
    }

    &:hover {
      text-decoration: none;
    }

    &::after {
      // creates a subtle shadow that does not conflict with
      // the rounded corners of the tab and the <main>
      content: "";
      position: absolute;
      width: calc(100% - #{2 * $border-radius-default});
      height: 0.5rem;
      bottom: -0.5rem;
      left: $border-radius-default;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    }

    .coming-soon {
      display: block;
      line-height: 1;
      font-size: 0.75rem;

      @include break-phone {
        font-size: 1rem;
      }
    }
  }
}

#footer {
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
  width: 100%;
  padding: 1rem;
}
</style>
