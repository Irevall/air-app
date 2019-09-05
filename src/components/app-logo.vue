<template>
  <div class="app-logo">
    <img class="app-logo__icon" src="@/assets/images/icon.svg" alt=""/>
    <span class="app-logo__name">AirApp</span>
  </div>
</template>

<script>
  export default {
    name: 'app-logo'
  }
</script>

<style lang=scss>
  .app-logo {
    --logo-font-size: 3rem;

    display: flex;
    align-items: flex-end;
  }
  .app-logo__icon {
    height: calc(var(--logo-font-size) * 1.5);
  }

  .app-logo__name {
    margin-left: 1rem;
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    font-size: var(--logo-font-size);
    margin-bottom: 0.25rem;
  }
</style>