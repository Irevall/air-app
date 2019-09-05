<template>
  <div class="app-details">
    <app-logo style="--logo-font-size: 2rem;"/>
    <div class="app-details__header">
      <div class="app-details__subheader">
        <span class="app-details__subheader-name">Date:</span>
        <span class="app-details__subheader-value">22.08.2019</span>
      </div>

      <div class="app-details__subheader">
        <span class="app-details__subheader-name">Location:</span>
        <span class="app-details__subheader-value">Wrocław, PL</span>
      </div>
    </div>

    <div class="app-details__readings">

    </div>
  </div>
</template>

<script>
  import { getDetailedWeather } from '../services/ApiService'
  import AppLogo from './app-logo'

  export default {
    name: 'app-home',
    components: { AppLogo },
    props: {
      query: String
    },
    data () {
      return {
        detailedWeather: null,
      }
    },
    async created () {
      const result = await getDetailedWeather(this.query)
      console.log(result)
    }
  }
</script>

<style lang=scss>
  .app-details {
    display: grid;
    grid-template-rows: auto;
  }
</style>