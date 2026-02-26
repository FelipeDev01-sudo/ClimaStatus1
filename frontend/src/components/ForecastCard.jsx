const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Group forecast items by day, taking the midday entry when possible
const groupByDay = (forecastList) => {
  const map = {};
  forecastList.forEach((item) => {
    const date = item.date.split(' ')[0];
    if (!map[date]) {
      map[date] = item;
    } else {
      // Prefer entry closest to noon
      const existingHour = parseInt(map[date].date.split(' ')[1].split(':')[0]);
      const currentHour = parseInt(item.date.split(' ')[1].split(':')[0]);
      if (Math.abs(currentHour - 12) < Math.abs(existingHour - 12)) {
        map[date] = item;
      }
    }
  });
  return Object.values(map).slice(0, 5);
};

const ForecastCard = ({ forecast }) => {
  if (!forecast) return null;

  const days = groupByDay(forecast.forecast);

  return (
    <div className="forecast-card">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-grid">
        {days.map((day, idx) => {
          const dateObj = new Date(day.date);
          const dayName = idx === 0 ? 'Today' : DAYS[dateObj.getDay()];
          return (
            <div key={day.date} className="forecast-day">
              <span className="forecast-day-name">{dayName}</span>
              <img src={day.iconUrl} alt={day.description} className="forecast-icon" />
              <span className="forecast-desc">{day.description}</span>
              <div className="forecast-temps">
                <span className="temp-max">{day.tempMax}°</span>
                <span className="temp-min">{day.tempMin}°</span>
              </div>
              <div className="forecast-extra">
                <span>💧 {day.humidity}%</span>
                <span>💨 {day.windSpeed} m/s</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastCard;
