<template>
  <div class="app-current-weather">
    <span class="app-current-weather__temperature">{{ formattedTemperature }}°C</span>

    <div class="app-current-weather__info">
      <div class="app-current-weather__info-line">
        <span class="app-current-weather__info-header">Date:</span>
        <span>{{ formattedDate }}</span>
      </div>

      <div class="app-current-weather__info-line">
        <span class="app-current-weather__info-header">Location:</span>
        <span>{{ `${searchResult.name}, ${searchResult.countryCode}` }}</span>
      </div>

      <div class="app-current-weather__info-line">
        <span class="app-current-weather__info-header">Description:</span>
        <span>{{ searchResult.description }}</span>
      </div>
    </div>

    <div class="app-current-weather__more-button" @click="getDetails">More</div>
  </div>
</template>

<script>
  import { CurrentWeather } from '../models/WeatherModel'

  export default {
    name: 'app-current-weather',
    props: {
      searchResult: CurrentWeather
    },
    computed: {
      formattedTemperature () {
        return Math.round(this.searchResult.temperature)
      },
      formattedDate () {
        return this.searchResult.date.toLocaleString('pl-PL', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      }
    },
    methods: {
      getDetails () {
        this.$router.push({ name: 'details', params: { city: this.searchResult.name } })
      }
    }
  }
</script>

<style lang=scss>
  .app-current-weather {
    position: relative;
    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    justify-items: end;
    padding: 1.5rem 5rem 1.5rem 3rem;
    background: rgba(191, 191, 191, 0.43)
  }

  .app-current-weather__temperature {
    font-family: 'Comfortaa', cursive;
    font-size: 2.5rem;
    margin-right: 2rem;
  }
  .app-current-weather__info {
    display: flex;
    flex-direction: column;
  }

  .app-current-weather__info-line {
    display: flex;
  }

  .app-current-weather__info-header {
    font-weight: 600;
    margin-right: 0.5rem;
  }

  .app-current-weather__more-button {
    position: absolute;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    bottom: 0.5rem;
    right: 0.75rem;
  }
</style>