import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Melbourne",
    temperature: "20",
    date: "Sunday 18:40",
    description: "sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "58",
    wind: "15",
    feelsLike: "23",
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <header>
          <button className="themeButton">Light or Dark Mode</button>
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city"
              required
              className="search-form-input"
              id="search-form-city"
            />
            <input
              type="submit"
              value="Search"
              className="search-form-submit"
            />
          </form>
        </header>
        <main>
          <div className="weather-app-body">
            <div>
              <h1 className="city-name">{weatherData.city}</h1>
              <p className="weather-details">
                <span id="time"></span> <br />
                Humidity:{" "}
                <span className="variable-details">{weatherData.humidity}</span>
                <br />
                Wind:{" "}
                <span className="variable-details">{weatherData.wind}</span>
              </p>
            </div>
            <div className="weather-feels-container">
              <span className="weather-temp-container">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="weather-icon"
                />
                <div className="weather-value">{weatherData.temperature}</div>
                <div className="weather-unit">&deg;C</div>
              </span>
              <div className="weather-descript">
                <span>{weatherData.description}</span>
              </div>
              <div className="feels-like-container">
                <p className="feels-like-container-base">
                  Feels like:{" "}
                  <span className="feels-value variable-details">
                    {weatherData.feelsLike}
                  </span>
                  <span className="feels-unit">&deg;C</span>
                  <br />
                </p>
              </div>
            </div>
          </div>

          {/* <div className="forecast-weather" id="forecast"></div> */}
        </main>
        <footer>
          This project was coded by
          <a href="https://github.com/Anneth6" target="_blank" rel="noreferrer">
            Ann Russell
          </a>
          , is open-sourced on
          <a
            href="https://github.com/Anneth6/Anneth-Weather-and-Forecast-Project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          and hosted on
          <a
            href="https://main--anneth-weather-plus-forecast.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
