import React from "react";
import { useState } from "react";
import SearchCity from "./components/SearchCity";
import WeatherUI from "./components/WeatherUI";

function App() {
  const [data, setData] = useState("");
  const onSubmitForm = (city) => {
    setData(city);
  };
  return (
    <>  
    <h1 className="text-white text-3xl text-center mt-5 capitalize font-semibold">Weather App</h1>
      <SearchCity onSubmitForm={onSubmitForm} />
      <WeatherUI data={data} />
    </>
  );
}

export default App;
