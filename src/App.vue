<template>
  <div class="app">
    <router-view/>
    <div class="app__background-wrapper">
      <img class="app__background" src="@/assets/images/background.jpg" alt=""/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  @import '@/styles/global.scss';

  .app {
    display: grid;
    min-height: 100vh;
  }

  .app__background-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }

  .app__background {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    display: block;
  }
</style>
