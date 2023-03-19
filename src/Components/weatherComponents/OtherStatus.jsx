import { useGlobalContext } from '../../context'
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { IoIosEye } from "react-icons/io";

const OtherStatus = () => {

  const { weatherReport: { current } } = useGlobalContext()

  const humidity = current?.humidity
  const WindSpeed = current?.wind_kph
  const visibility = current?.vis_km

  return <div className='col-span-2 flex justify-evenly border-2 border-solid rounded-xl py-2 text-center md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3 '>
    <div className="flex flex-col">
      <span className="flex justify-evenly items-center">
        <WiStrongWind />
        <span className="text-clr">{WindSpeed}</span>
        <span>km/h</span>
      </span>
      <span className="text-sm tracking-wide">Wind Speed</span>
    </div>
    <div className="flex flex-col">
      <span className="flex justify-evenly items-center">
        <WiHumidity />
        <span className="text-clr">{humidity}</span>
        <span>%</span>
      </span>
      <span className="text-sm tracking-wide"> Humidity</span>
    </div>
    <div className="flex flex-col">
      <span className="flex justify-evenly items-center">
        <IoIosEye />
        <span className="text-clr">{visibility}</span>
        <span>Km</span>
      </span>
      <span className="text-sm tracking-wide">Visibilty</span>
    </div>
  </div>
}

export default OtherStatus