import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import clear_icon from "./Assets/clear.png";
import cloud_icon from "./Assets/cloud.png";
import drizzle_icon from "./Assets/drizzle.png";
import rain_icon from "./Assets/rain.png";
import snow_icon from "./Assets/snow.png";
import humidity_icon from "./Assets/humidity.png"
import search_icon from "./Assets/search.png";
import wind_icon from "./Assets/wind.png";

const App = () => {

  let api_key = "e224ced4f70a2ffbb02c0d5d1f03ab28";

  const [wicon, setWicon] = useState(cloud_icon);
  const [city, setCity] = useState("")
  const search = async () => {
    const element = document.getElementsByClassName("search_bar")
    if (city.trim() === "") {
      alert("Enter city name")
    }


    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    if (!response.ok)
      alert("not Found")
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity_percent")
    const wind = document.getElementsByClassName("wind_rate");
    const temperature = document.getElementsByClassName("weather_temp");
    const location = document.getElementsByClassName("weather_location");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/hr";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon(cloud_icon);
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon(drizzle_icon);
    } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWicon(cloud_icon); // Overcast clouds
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon(rain_icon);
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }


  }


  return (
    <>

      <div className="container">
        <div className="topbar">
          <div className="topsearch">
            <input type="text" className="search_bar" name="" id="" placeholder='search'
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  search()
              }
              } />

            <div className="search_box" onClick={() => { search() }}>
              <img src={search_icon} alt="" />
            </div>

          </div>
          <img src={wicon} className='clear_img' alt="" />

          <div className="weather_temp">20ºC</div>
          <div className="weather_location">Kathmandu</div>

          <div className="data_container">
            <div className="element">
              <img src={humidity_icon} className='icon' alt="" />
              <div className="element_text">
                <p className='humidity_percent'>64%</p>
                <p>Humidity</p>
              </div>
            </div>

            <div className="element">
              <img src={wind_icon} className='icon' alt="" />
              <div className="element_text">
                <p className='wind_rate'>15 km/hr</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
