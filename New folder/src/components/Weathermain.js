import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Weatherdata from "./Weatherdata";

import logo from "../img/Spinner.svg";

const Weathermain = () => {
  //State for Loading and Values Rendering
  const [items, setItems] = useState();
  const [isloading, setIsLoading] = useState(true);

  //Ref for Searching City
  const inputRef = useRef(null);

  //Variables for reusing
  const weatherurl = "https://weatherapi-com.p.rapidapi.com/forecast.json";
  const weatherhost = "weatherapi-com.p.rapidapi.com";

  //Arrow function for Response from Api
  const getData = async (url, host, p) => {
    const response = await axios(url, {
      method: "GET",
      params: { q: p, aqi: "yes", days: 3 },
      headers: {
        "x-rapidapi-key": "2f975b0335msh3aa6cc04730ad7ep15e9e5jsn5413bd485f2e",
        "x-rapidapi-host": host,
      },
    });
    if (!response.status === 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.data;
  };

  //Calling Api Function
  async function fetchMyAPI(e) {
    let value;
    try {
      value = await getData(weatherurl, weatherhost, e);
    } catch {
      alert("Invalid City");
    }
    setItems(value);
    console.log(value);
    setIsLoading(false);
  }

  //useEffect for Rendering
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    setIsLoading(false);
  }, []);

  //Handleing Sumbit
  const handlesubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchMyAPI(inputRef.current.value);
    inputRef.current.value = "";
  };

  const successCallback = (positions) => {
    const data = `${positions.coords.latitude},${positions.coords.longitude}`;
    fetchMyAPI(data);
  };

  const errorCallback = (errors) => {
    alert("Allow Location access");
  };
  return (
    <div className="items">
      <center>
        <div className="inputbar">
          <form className=" max-w-xs text-gray-100">
            <div className="flex mt-6 items-center border-b border-green-400 py-2">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-grey-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                ref={inputRef}
                placeholder="Enter a City Name"
              />
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-white py-1 px-2 rounded focus:outline-none"
                onClick={handlesubmit}
              >
                Search
              </button>
            </div>
          </form>
        </div>
        {isloading && <img src={logo} alt="Loading..." />}
      </center>
      <br />
      <Weatherdata items={items} />
    </div>
  );
};
export default Weathermain;
