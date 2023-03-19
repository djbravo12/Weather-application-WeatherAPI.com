import { useState, useEffect } from "react";
import { useGlobalContext } from "../context"
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { WiSunrise, WiSunset } from "react-icons/wi";

const ForecastReport = () => {
  const { weatherReport: { forecast }, showWeatherData } = useGlobalContext()
  const [forecastDay, setForecastDay] = useState([]);

  useEffect(() => {
    if (forecast) {
      setForecastDay(forecast.forecastday);
    }
  }, [forecast]);


  // forecastDay.forEach(e => { console.log(e) })


  return <section className="forecast-box text-center col-span-2 border-2 rounded-xl border-solid pt-1 pb-3 px-2 md:col-span-2  md:overflow-hidden">
    <h1 className="py-1.5 md:border-b-2">Forecast for the next 7 days</h1>
    <div className="md:flex md:gap-4 md:overflow-x-scroll md:py-6"> 
    {forecastDay.map((e, i) => {
      const { date, day: { maxtemp_c, mintemp_c }, astro: { sunrise, sunset } } = e
      return <article className="border border-solid rounded-xl border-white mb-2" key={i}>
        <header className="border-b flex justify-between py-1 px-2.5 items-center"><h1 className="text-sm">Date:{date}</h1>
          <button onClick={() => showWeatherData(e)}  className="">...</button>
        </header>
        <div className="flex justify-between py-1 px-2.5 md:gap-4 md:py-6 md:px-4">
          <div className="flex justify-between gap-2 md:gap-4">
            <span className="flex justify-between items-center gap-1"><BsArrowDown /> {mintemp_c}</span>
            <span className="flex justify-between items-center gap-1"><BsArrowUp /> {maxtemp_c}</span>
          </div>
          <div className='flex justify-between gap-2 md:gap-4'>
            <span className="flex justify-between items-center gap-1"><WiSunrise /> {sunrise}</span>
            <span className="flex justify-between items-center gap-1"><WiSunset /> {sunset}</span>
          </div>
        </div>
      </article>
    })}
      </div>
  </section>
}

export default ForecastReport