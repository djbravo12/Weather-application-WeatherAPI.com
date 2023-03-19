import { useGlobalContext } from "../context"

const Modal = () => {

  const { selectedWeatherData: { hour }, closeBtn } = useGlobalContext()

  return <section className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.85)] grid place-items-center z-10">
    <div className="w-[90vw] h-[90vh] overflow-scroll border-2 rounded-xl">
      <div className="pt-2 pb-1.5 border-b">
        <button className="block mr-4 ml-auto" onClick={() => { closeBtn() }}>close</button>
      </div>
      <table className="Modal-table border-collapse text-center w-full p-4 font-normal">
        <thead className="text-sm">
          <tr className="border-b-2">
            <th className="px-1.5 py-2"><div>Time</div><div>24-HR</div></th>
            <th className="px-1.5 py-2"></th>
            <th className="px-1.5 py-2"><div>Temp</div><div>C</div></th>
            <th className="px-1.5 py-2"><div>Wind Speed</div><div>Km/h</div></th>
            <th className="px-1.5 py-2"><div>Humidity</div><div>%</div></th>
          </tr>
        </thead>


        <tbody>
          {
            hour.map((data, i) => {
              const { time, temp_c, wind_kph, humidity, condition: { icon } } = data
              const timingHours = time.slice(-5)

              return <tr key={i} className="border-b">
                <td className="px-1.5 py-0.5 text-xs">{timingHours}</td>
                <td className="px-1.5 py-0.5 text-xs"><img src={icon} /></td>
                <td className="px-1.5 py-0.5 text-xs">{temp_c}</td>
                <td className="px-1.5 py-0.5 text-xs">{wind_kph}</td>
                <td className="px-1.5 py-0.5 text-xs">{humidity}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </section>

}

export default Modal