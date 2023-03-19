import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from '../context'

const SearchBar = () => {

  const { getTheInputValue } = useGlobalContext()
  const [searchValue, setSearchValue,] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
  }

  const inputValueChangeFunction = (e) => {
    // setSearchValue("faridabad")
    e.preventDefault()
    getTheInputValue(searchValue)
    setSearchValue('')
  }

  // onChange={handleChange} for line 25

  return <div>
    <form onSubmit={inputValueChangeFunction} className="flex items-center ">
      <input type="text" className="input px-4 py-1 border border-solid border-transparent bg-red-600 outline-none mr-2 rounded-[10px] w-40 max-w-[650px] focus:outline-none focus:border focus:border-solid focus:border-white placeholder:text-white" placeholder="search by city name" onChange={handleChange} value={searchValue} />
      <button className="search-btn cursor-pointer border-transparent" type="submit" ><FaSearch /></button>
    </form>
  </div>
}

export default SearchBar