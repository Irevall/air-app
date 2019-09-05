<template>
  <div class="app-home">
    <app-logo class="app-home__logo"/>

    <div class="app-home__description">
      Check the weather! Start typing city name to get a suggestion.
    </div>

    <div class="app-home__search">
      <div class="app-home__input-wrapper">
        <input class="app-home__input" type="text" placeholder="Start typing..." v-model="searchQuery"
               @input="searchAutocomplete" @keypress.enter="autocomplete"/>
        <span class="app-home__input-suggestion" v-if="suggestion">{{ suggestion }}</span>
      </div>

      <span class="app-home__search-button" @click="checkWeather">Check</span>
    </div>

    <app-current-weather :search-result="searchResult" v-if="searchResult"/>
  </div>
</template>

<script>
  import AppLogo from './app-logo'
  import { autocompleteCity, getCurrentWeather } from '../services/ApiService'
  import uuid from 'uuidv4'
  import AppCurrentWeather from './app-current-weather'

  export default {
    name: 'app-home',
    components: { AppCurrentWeather, AppLogo },
    data () {
      return {
        suggestion: null,
        searchQuery: '',
        session: '',
        searchResult: null,
      }
    },
    methods: {
      async searchAutocomplete () {
        const searchQuery = this.searchQuery

        if (this.suggestion && this.searchQuery && this.suggestion.startsWith(this.searchQuery)) return

        this.suggestion = null

        if (!this.searchQuery) return

        if (!this.session) this.session = uuid()

        const { predictions } = await autocompleteCity(this.searchQuery, this.session)


        const filterPredictions = predictions.filter(prediction => prediction.types.includes('locality'))

        if (searchQuery !== this.searchQuery) return

        if (filterPredictions.length) {
          this.suggestion = filterPredictions[0]['structured_formatting']['main_text']
        } else {
          this.suggestion = null
        }
      },
      autocomplete () {
        this.searchQuery = this.suggestion
        this.checkWeather()
      },
      async checkWeather () {
        const result = await getCurrentWeather(this.searchQuery)
        console.log(result)
        this.searchResult = result
      }
    }
  }
</script>

<style lang=scss>
  .app-home {
    display: grid;
    grid-row-gap: 1rem;
  }

  .app-home__logo {
    margin-left: 3rem;
  }

  .app-home__search {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .app-home__input-wrapper {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .app-home__input {
    height: 100%;
    width: 100%;
    background: rgba(220, 220, 220, 0.3);
    border: 2px solid rgba(220, 220, 220, 0.75);
    border-radius: 2px;
    box-sizing: border-box;
    padding: 0 0.75rem;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.25rem;
    outline: none;

    &::-webkit-input-placeholder {
      color: #cbcfcc;
    }
  }

  .app-home__input-suggestion {
    position: absolute;
    top: 0;
    left: calc(0.75rem + 2px);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.25rem;
    opacity: 0.5;
    white-space: nowrap;
    z-index: -1;
  }

  .app-home__search-button {
    display: flex;
    background: rgba(220, 220, 220, 0.6);
    padding: 1rem 3.5rem;
    margin-left: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>