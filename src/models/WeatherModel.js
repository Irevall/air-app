export class CurrentWeather {
  constructor (raw) {
    this.id = raw.id
    this.name = raw.name
    this.temperature = raw.main.temp
    this.countryCode = raw.sys.country
    this.date = new Date(raw.dt * 1000)
    this.description = raw.weather[0].description

    console.log(raw)
  }
}

export class DetailedWeather {
  constructor (raw) {
    this.id = raw.city.id
    this.city = raw.city.name
    this.countryCode = raw.city.country
    this.date = new Date(raw.list[0].dt * 1000)
    this.readings = raw.list.map(reading => new HourWeather(reading))
      .filter(reading => reading.date.getDate() === this.date.getDate())

    console.log(raw)
  }
}

class HourWeather {
  constructor (raw) {
    this.temperature = raw.main.temp
    this.date = new Date(raw.dt * 1000)
    this.description = raw.weather[0].description

    console.log(raw)
  }
}
