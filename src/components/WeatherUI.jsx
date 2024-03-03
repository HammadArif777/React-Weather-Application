import React from "react";

function WeatherUI({ data }) {
  const date = new Date().toLocaleDateString("en-US", {
    weekDay: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!data.message && data) {
    return (
      <>
        <div
          className="bg-white space-y-2 flex-wrap rounded-b-lg mx-auto w-1/2 flex flex-row items-center p-5
              md:w-1/4
              "
        >
          <div className="text-md uppercase text-center w-full">{date}</div>
          <div className="uppercase text-center font-semibold w-full bg text-2xl">
            {data.name}
          </div>
          <div className="text-blue-900 w-full text-6xl text-center font-semibold">
            {data.temperature}&#176;<sup>c</sup>
          </div>
          <div className="capitalize text-center w-full text-xl">
            {data.description}
          </div>
          <div className="w-full text-center flex flex-row items-center justify-center">
            <div className="text-5xl">{data.humidity + "%"}</div>
          </div>
          <div className="text-center w-full">Humidity</div>
          <div className="w-full text-center text-3xl">{data.country}</div>
          <div className="text-center w-full">Country</div>
        </div>
      </>
    );
  } else {
    return (
      <div className="w-1/2 text-center flex-wrap  mx-auto md:w-1/4 bg-white p-5 text-red-600 capitalize">
        {data.message || <p className="text-black">Have a good day mate;)</p>}
      </div>
    );
  }
}

export default WeatherUI;
