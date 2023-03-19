import { useGlobalContext } from "../../context"

const IconPart = () => {
  const { weatherReport } = useGlobalContext()
  const description = weatherReport?.current?.condition?.text
  const icon = weatherReport?.current?.condition?.icon

  return <div className="col-start-2 col-end-3 text-center border-2 border-solid rounded-xl flex justify-between flex-col items-center px-4 py-1 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3">
    <img className=""src={icon} />
    <p>{description}</p>
  </div>
}

export default IconPart