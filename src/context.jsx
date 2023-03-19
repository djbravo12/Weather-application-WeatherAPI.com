import { createContext, useContext, useState, useEffect } from "react"
import axios from 'axios'



const WeatherContext = createContext(null)
// const date = new Date()


const WeatherProvider = ({ children }) => {

  //Use State Hooks
  const [loading, setLoading] = useState(true)
  const [cordinate, setCordinates] = useState({ lat: '', lon: '' })
  const [weatherReport, setWeatherReport] = useState([])
  const [selectedWeatherData, setSelectedWeatherData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [errorLoading, setErrorloading]=useState(false)




  //Use Effect Hooks
  // #for cordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((currentLocationData) => {
      const { coords: { latitude: lat, longitude: lon } } = currentLocationData
      setCordinates(({ ...cordinate, lat: lat.toFixed(2), lon: lon.toFixed(2) }))
    })
  }, [])


  const getTheInputValue = (cominginputvalue) => {
    setInputValue(cominginputvalue)
  }

  const getValue = (passedValue) => {


    if (typeof passedValue === "object") {
      if (passedValue.lon && passedValue.lat)
        return `https://api.weatherapi.com/v1/forecast.json?key=42f7ed133b01478f850124453230203&q=${passedValue.lat},${passedValue.lon}&days=7&aqi=no&alerts=no`
    }
    else if (typeof passedValue === 'string') {
      return `https://api.weatherapi.com/v1/forecast.json?key=42f7ed133b01478f850124453230203&q=${passedValue}&days=7&aqi=no&alerts=no`
    }
  }

  //API Data using Axios FetchAPI
  const fetchWeatherData = async (cordinateData) => {
    setLoading(true)


    // if (!cordinateData) return

    let dataURL = getValue(cordinateData)
    try {
      const {data} = await axios.get(dataURL)
      data ? setWeatherReport(data) : setWeatherReport([])
      setErrorloading(false)
    }
    catch (error) {
      console.log(error)
     setErrorloading(true) 
    }
    setLoading(false)
  }

  // #for Fetch the Data
  useEffect(() => {
    if (!cordinate.lat && !cordinate.lon) return
    fetchWeatherData(cordinate)
      }, [cordinate])

  useEffect(() => {
    if (!inputValue) return
    fetchWeatherData(inputValue);
  }, [inputValue])
  
    
    const showWeatherData = (filterData) => {
    setShowModal(true)
    setSelectedWeatherData(filterData)
    };
  
    const closeBtn = () => { setShowModal(false) };
        
 return < WeatherContext.Provider value={{weatherReport, loading, showWeatherData, selectedWeatherData,showModal, closeBtn, inputValue, getTheInputValue, errorLoading}}>
          {children}
  </WeatherContext.Provider >;}


const useGlobalContext = () => {return useContext(WeatherContext)};

export { WeatherProvider, useGlobalContext };