import { useGlobalContext } from '../../context';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";


const CurrentTempDisplayBox = () => {

  const { weatherReport: { current } } = useGlobalContext()
  const { weatherReport } = useGlobalContext()

  const currentTemp = current?.feelslike_c
  const minTemp = weatherReport?.forecast?.forecastday[0]?.day?.mintemp_c
  const maxTemp = weatherReport?.forecast?.forecastday[0]?.day?.maxtemp_c

  return <article className='text-center border-2 border-solid border-white-900 rounded-xl py-2 col-span-1 row-start-1 row-end-3 grid md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4'>
    <h1 className="text-[3em] text-red-600 py-4">{currentTemp}&deg;C</h1>
    <footer className='flex justify-evenly'>
      <span className='flex items-center'><BsArrowDown />{minTemp}&deg;C</span>
      <span className='flex items-center'><BsArrowUp />{maxTemp}&deg;C</span>
    </footer>
  </article>
}

export default CurrentTempDisplayBox