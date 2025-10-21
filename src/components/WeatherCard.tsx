import React from "react";
import type { WeatherData } from "../types/weather";
import {
  formatTemperature,
  formatWind,
  formatVisibility,
  formatPressure,
  formatTime,
} from "../utils/format";

interface Props {
  data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  const rain = data.rain?.["1h"] || data.rain?.["3h"];
  const snow = data.snow?.["1h"] || data.snow?.["3h"];

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4 bg-light mt-4">
 
      <h2 className="text-primary fw-bold text-center">{data.name}, {data.sys.country}</h2>
      <p className="text-muted mb-3 fs-6 text-center">{data.weather[0].description.toUpperCase()}</p>

 
      <div className="d-flex flex-column align-items-center justify-content-center mb-4">
        <img src={iconUrl} alt={data.weather[0].description} width={120} height={120} />
        <h1 className="display-3 fw-semibold text-dark mt-2">
          {formatTemperature(data.main.temp)}
        </h1>
        <p className="text-muted">Sensação térmica: {formatTemperature(data.main.feels_like)}</p>
      </div>

 
      <div className="row text-start text-md-center g-4">
        <div className="col-md-4">
          <h6 className="fw-bold text-secondary">🌡️ Temperaturas</h6>
          <p className="mb-1"><strong>Máx:</strong> {formatTemperature(data.main.temp_max)}</p>
          <p className="mb-1"><strong>Mín:</strong> {formatTemperature(data.main.temp_min)}</p>
          <p className="mb-0"><strong>Nuvens:</strong> {data.clouds.all}%</p>
        </div>

        <div className="col-md-4 border-md-start border-md-end">
          <h6 className="fw-bold text-secondary">💧 Atmosfera</h6>
          <p className="mb-1"><strong>Umidade:</strong> {data.main.humidity}%</p>
          <p className="mb-1"><strong>Pressão:</strong> {formatPressure(data.main.pressure)}</p>
          <p className="mb-0"><strong>Visibilidade:</strong> {formatVisibility(data.visibility)}</p>
        </div>

        <div className="col-md-4">
          <h6 className="fw-bold text-secondary">🌬️ Vento & Sol</h6>
          <p className="mb-1"><strong>Vento:</strong> {formatWind(data.wind.speed, data.wind.deg)}</p>
          <p className="mb-1"><strong>Nascer:</strong> {formatTime(data.sys.sunrise)}</p>
          <p className="mb-0"><strong>Pôr do sol:</strong> {formatTime(data.sys.sunset)}</p>
        </div>
      </div>

     
      {(rain || snow) && (
        <div className="mt-4">
          <h6 className="fw-bold text-secondary mb-2">🌧️ Precipitação</h6>
          {rain && <p className="mb-0"><strong>Chuva:</strong> {rain} mm</p>}
          {snow && <p className="mb-0"><strong>Neve:</strong> {snow} mm</p>}
        </div>
      )}


      <hr className="my-4" />
      <div className="text-center text-muted small">
        <p className="mb-0">
          Lat: {data.coord.lat.toFixed(2)} | Lon: {data.coord.lon.toFixed(2)}
        </p>
        <p className="mb-0">Última atualização: {formatTime(data.dt)}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
