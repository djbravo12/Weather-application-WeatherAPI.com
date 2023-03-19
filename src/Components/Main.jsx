import CurrentTempDisplayBox from './weatherComponents/CurrentTemp'
import CityName from './weatherComponents/CityName'
import OtherStatus from './weatherComponents/OtherStatus'
import IconPart from './weatherComponents/Icon'
import ForecastReport from './ForecastReport'
import Modal from './modal'
import { useGlobalContext } from '../context'
import { BiError } from "react-icons/bi";

const Main = () => {

  const { loading, showModal,  errorLoading } = useGlobalContext()

  // console.log(weatherReport)

  if (loading) {
    return <section className="bg-black md:container-xl h-[80vh] grid items-center justify-center justify-items-stretch">
      {/*       <div className='container'> */}
      <h1 className="text-4xl md:text-9xl ">Loading<span className="animate-wiggle text-5xl">...</span></h1>
      {/*       </div> */}
    </section>
  }

  if (errorLoading) {

    // console.log(weatherReport.length)
    return <section className="bg-black md:container-xl h-[80vh] grid items-center justify-center">
      <h1 className="text-4xl md:text-9xl"><span><BiError className="inline" style={{color:'red'}}/></span>Wrong Input...</h1>
    </section>
  }



  return <section className="grid grid-col-2 bg-black py-8 px-4 gap-4 font-RobotoMono lg:h-[80vh]">
    <CurrentTempDisplayBox />
    <CityName />
    <IconPart />
    <OtherStatus />
    <ForecastReport />
    {showModal && <Modal />}
  </section>
}

export default Main