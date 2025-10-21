import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { getWeatherByCity } from './utils/api';
import  { type WeatherData } from "./types/weather";

const App: React.FC = () => {
  const getBackgroundClass = (main: string) => {
  switch (main.toLowerCase()) {
    case "clear":
      return "bg-sunny";
    case "rain":
    case "drizzle":
      return "bg-rainy";
    case "clouds":
      return "bg-cloudy";
    case "snow":
      return "bg-snowy";
    default:
      return "bg-default";
  }
};

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container-fluid min-vh-100 py-5 ${getBackgroundClass(weather?.weather[0].main || "")}`}>
      <h1 className="text-center mb-4 text-primary">🌤️ Clima Atual</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;
