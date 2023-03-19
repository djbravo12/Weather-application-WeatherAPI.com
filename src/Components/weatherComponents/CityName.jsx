import { useGlobalContext } from '../../context'

const CityName = () => {

  const { weatherReport } = useGlobalContext()

  const currentCity = weatherReport?.location?.name
  const currentLocalTime = weatherReport?.location?.localtime
  const [date, time] = currentLocalTime.split(' ')

  return <article className="text-center border-2 border-solid border-white-900 rounded-xl py-1 grid grid-col-2  col-start-2 col-end-3 md:bg-red-600 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
    <h1 className="col-span-2">{currentCity}</h1>
    <div className="col-span-1">{time}</div>
    <div className="col-span-1">{date}</div>
  </article>
}

export default CityName