import React, { useEffect, useRef, useState } from "react";

function SearchCity(props) {
    const [valid, setValid] = useState(true)
  const [userInput, setUserInput] = useState("");
  const inputBox = useRef(null);
//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(fetchWeatherAPI());
//     setUserInput("");
//   };
const submitHandler =  async (event) => {
    if(userInput.length === 0)
    {
        setValid(false);
        return;
    }
    event.preventDefault();
    let weatherData;
    try {
       weatherData =  await fetchWeatherAPI();
      console.log(weatherData);
      if(weatherData.message)
      {
        console.log(weatherData.message)
        props.onSubmitForm(weatherData)
        return
      }
    } catch (error) {
      console.log(error);
    }
    const cityData = {
        temperature : Math.floor(weatherData.main.temp) -273,
        name : weatherData.name,
        humidity : weatherData.main.humidity,
        country : weatherData.sys.country,
        description: weatherData.weather[0].description,
        icon : weatherData.weather[0].icon
    }
    props.onSubmitForm(cityData)
    console.log(cityData);
    setUserInput("")
  };
  
  async function fetchWeatherAPI() {
    const APIKEY = "86faa526750417e655e6817b5fb67930";
    try {
      const response = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${APIKEY}
        `);
        const data = await response.json();
      return data;
      
    } catch (e) {
      console.log("Data not found");
      return 'Not Found';
    }
    
  }
  useEffect(()=>{
    inputBox.current.focus();
  });
  
  return (
    <>
      <form className="weather-ui space-y-1 flex-wrap mt-5 w-1/2 mx-auto p-2 rounded-t-lg bg-white flex flex-row items-center
      md:w-1/4
      " onSubmit={submitHandler} action="">
        <input
        ref={inputBox}
        className={`focus:outline-sky-600 w-full text-lg p-1 rounded-md ${valid?'border-2' :'border-2 border-red-600'}`}
          value={userInput}
          placeholder={`${valid?'Enter City':'Hey?Enter first mate'}`}
          onChange={(event) => setUserInput(event.target.value)}
          type="text"
        />
        <button 
        className="w-full bg-sky-600 p-1 rounded text-white active:bg-sky-700"
        type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchCity;
