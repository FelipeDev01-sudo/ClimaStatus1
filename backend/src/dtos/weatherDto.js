class CurrentWeatherDto {
  constructor(data) {
    this.city = data.name;
    this.country = data.sys.country;
    this.temperature = Math.round(data.main.temp);
    this.feelsLike = Math.round(data.main.feels_like);
    this.humidity = data.main.humidity;
    this.pressure = data.main.pressure;
    this.description = data.weather[0].description;
    this.icon = data.weather[0].icon;
    this.iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.windSpeed = data.wind.speed;
    this.visibility = data.visibility;
    this.timestamp = new Date().toISOString();
  }
}

class ForecastDayDto {
  constructor(data) {
    this.date = data.dt_txt;
    this.temperature = Math.round(data.main.temp);
    this.tempMin = Math.round(data.main.temp_min);
    this.tempMax = Math.round(data.main.temp_max);
    this.humidity = data.main.humidity;
    this.description = data.weather[0].description;
    this.icon = data.weather[0].icon;
    this.iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.windSpeed = data.wind.speed;
  }
}

class ForecastDto {
  constructor(data) {
    this.city = data.city.name;
    this.country = data.city.country;
    this.forecast = data.list.map((item) => new ForecastDayDto(item));
  }
}

module.exports = { CurrentWeatherDto, ForecastDto };
