import React from "react";
import "../App.css";
import Weathermain from "./Weathermain";

const Home = () => {
  return (
    <>
      <div className="bgcolor">
        <div className="container">
          <p className="title text-gray-100 text-center text-4xl tracking-wide">
            <br />
            ☁ Weather App ☁
          </p>
          <Weathermain />
        </div>
      </div>
    </>
  );
};

export default Home;
