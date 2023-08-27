<template>
  <div id="wrapper">
    <img
      id="logo"
      src="./assets/img/logo.svg"
      alt="Wingspan Helper logo"
    >

    <div id="appContainer">
      <main id="main">
        <Scoresheet />
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

<script>
import Scoresheet from './views/Scoresheet.vue'

export default {
  name: 'App',
  components: { Scoresheet }
}
</script>

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

#appContainer {
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
  border-radius: $border-radius-default;
  background-clip: border-box;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);

  @include break-phone {
    padding: 1rem;
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
