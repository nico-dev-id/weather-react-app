
function WeatherCard ({ city, weather, loading, error }) {
    console.log(weather)

    if (loading) {
        return <div className="loader"></div>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    if (!weather) {
        return <h2>Belum ada Data</h2>
    }

    return (
        <>
            <div className="weather-card">
                <h2>{weather.location.name}, {weather.location.country}</h2>
                <p className="temp">{Math.round(weather.current.temp_c)} ℃</p>
                <p>{weather.current.condition.text}</p>
                <img src={"https:" + weather.current.condition.icon} alt="icon cuaca" style={{width: "80px"}} />
                <p>Humidity: {weather.current.humidity}%</p>
                <p>Wind: {Math.round(weather.current.wind_kph)} km/h</p>
            </div>

            {/*forecast*/}
            <div className="forecast">
                {weather.forecast.forecastday.slice(0).map((day, index) => (
                    <div key={index} className="forecast-item"> 
                        <p>{new Date(day.date).toLocaleDateString("id-ID", {
                            weekday: "short"
                        })}</p>
                        <p>{Math.round(day.day.avgtemp_c)}℃</p>
                        <img src={"https:" + day.day.condition.icon}alt="" /> 
                    </div>
                ))}
            </div>
        </>
    )
}

export default WeatherCard