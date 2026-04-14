import { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import WeatherCard from "./WeatherCard";
import './App.css';
import './index.css';

function App() {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  //console.log(city)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  //API
  const getWeather = async (city) => {
    setLoading(true)
    setError("")

    const apiKey = "1a950d99464449cd9c334007263003"
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`

    try {
      const response = await fetch (url)
      if (!response.ok) {
        throw new Error("Kota Tidak ditemukan!")
      }
      const data = await response.json()
      setWeather(data)

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  } //SAMPAI SINI
  //console.log(weather)

  //geolocation
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude
          getWeather(`${lat},${lon}`)
        }, (error) => {
          console.log("lokasi ditolak")
          getWeather("Jakarta") //fullback
        }
      )
    }, [])

  return (
    <>
    <Header />

    <Search 
    setCity={setCity} 
    getWeather={getWeather}
    setError={setError}
    />

    <WeatherCard 
    city={city} 
    weather={weather} 
    loading={loading} 
    error={error}
    />
    
    </>
  )
}

export default App