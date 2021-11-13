import React from "react";

const Weatherdata = ({ items }) => {
  if (!items) return null;
  return (
    <div className="datas grid grid-cols-1 md:grid-cols-3 ">
      <div className="m-12 rounded-xl text-center bg-green-400 text-gray-800 text-opacity-95 bg-opacity-100 bg-gray-100 backdrop-filter backdrop-blur-lg ">
        <div className=" mt-4 text-3xl font-medium ">{items.location.name}</div>

        <div className="location-region mt-2 text-xl font-medium">
          {items.location.region}
        </div>

        <div className="country  mt-2 mb-4 text-lg font-medium">
          {items.location.country}
        </div>
        {/* <div className="latitude">lat = {items.location.lat}</div>
       <div className="longitude">long = {items.location.lon}</div> */}
      </div>
      <div className="t-in-c rounded-xl bg-green-400 bg-opacity-100  text-center font-sans text-gray-800 text-opacity-95 text-9xl m-9 bg-gray-100 backdrop-filter backdrop-blur-lg">
        <div className="mt-3">
          {items.current.temp_c}&deg;
          <span style={{ fontSize: "70px" }}>C</span>
        </div>
      </div>
      <div className="co-img rounded-xl m-8 text-gray-800 text-opacity-95 text-center bg-green-400 bg-opacity-100 backdrop-filter backdrop-blur-lg ">
        <div className=" m-8 condition  text-4xl font-semibold text-opacity-5">
          {items.current.condition.text}
        </div>
        <div className="image-weather">
          <center>
            <img src={items.current.condition.icon} alt="" />
          </center>
        </div>
      </div>
      <div className="airdetail rounded-xl text-gray-800 text-opacity-95 bg-green-400 bg-opacity-100 m-16 bg-gray-100 backdrop-filter backdrop-blur-lg ">
        <div className=" ml-14 text-left">
          <div className="feelslike mt-16 m-3 text-xl font-medium">
            Feels like :{items.current.feelslike_c}
            <span>&deg;C</span>
          </div>
          <div className="windspeed m-3 text-xl font-medium">
            Windspeed :{items.current.wind_kph}Km/h
          </div>
          <div className="pressure m-3 text-xl font-medium">
            Pressure :{items.current.pressure_mb}mbar
          </div>
          <div className="humidity m-3 text-xl font-medium">
            Humidity :{items.current.humidity}
          </div>
        </div>
      </div>

      <div className="airquality rounded-xl text-gray-800 text-opacity-95 bg-green-400 bg-opacity-100 text-center m-8 bg-gray-100 backdrop-filter backdrop-blur-lg">
        <div className="ml-12 list mt-4 text-xl font-normal text-justify">
          <h3 className="text-3xl font-medium mb-3">Air quality</h3>
          <ol>1 -{">"} Good</ol>
          <ol>2 -{">"} Moderate </ol>
          <ol>3 -{">"} Unhealthy for sensitive group</ol>
          <ol>4 -{">"} Unhealthy</ol>
          <ol>5 -{">"} Very Unhealthy</ol>
          <ol>6 -{">"} Hazardous</ol>
        </div>
        <span>-----------------------------------</span>
        <br />
        <span className="air" style={{ textAlign: "center", fontSize: "64px" }}>
          {items.current.air_quality["us-epa-index"]}
        </span>
      </div>
      <div className="astro rounded-xl text-gray-800 text-opacity-95 bg-green-400 bg-opacity-100 m-16 text-center bg-gray-100 backdrop-filter backdrop-blur-sm">
        <div className="rise mt-16 text-xl font-medium">
          🌄 Sunrise Time : {items.forecast.forecastday[0].astro.sunrise}
        </div>
        <div className="sunset mt-12 text-xl mb-8 font-medium">
          🌅 Sunset Time : {items.forecast.forecastday[0].astro.sunset}
        </div>
      </div>

      {/* <h1>lat = {items.city.coord.lat}</h1>
      <h1>long = {items.city.coord.lon}</h1> */}
      {/* <h2>Weather info ={items.wea}</h2> */}
    </div>
  );
};

export default Weatherdata;
