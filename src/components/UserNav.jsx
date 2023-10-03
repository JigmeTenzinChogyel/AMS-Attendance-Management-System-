import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

function UserNav() {

  const studentDetails = JSON.parse(localStorage.getItem('studentDetails'))

    //active link or nav bar
    const style = "px-4 my-2 py-2 text-lg text-black font-semibold"
    const activeStyle = "px-4 my-2 py-2 text-lg text-blue-500 font-semibold border-b-2 border-blue-500"

    //When the user enters in the search bar
    const [ search, setSearch ] = useState("")

    const handleChange = (e) => {
      setSearch(e.target.value)
    }

    const handleKeyPress = (e) => {
      if (e.key == "Enter") {
        search != "" && console.log(search)
        setSearch("")
        e.target.blur()
      }
    }

    //toggles the style when the user clicks the search
    const [isSearch, setIsSearch] = useState(false);
    const handleFocus = () => {
        setIsSearch(true);
    };

    const handleBlur = () => {
        setIsSearch(false);
    };

  return (
    <div className="bg-white w-full flex justify-between items-center px-5 py-2 top-0 fixed z-10 border-b">
        <div className="flex items-center gap-6 text-lg font-semibold">
            <img src={ logo } className="w-20 h-20"/>
            <NavLink to="." end className={({isActive}) => isActive ? activeStyle : style}>
                <FontAwesomeIcon icon="fa-solid fa-compass" className="mr-2"/>Overview
            </NavLink>
            <NavLink to="attendance" end className={({isActive}) => isActive ? activeStyle : style}>
                <FontAwesomeIcon icon="fa-solid fa-file-pen" className="mr-2"/>Attendance
            </NavLink>
            <NavLink to="leave" end className={({isActive}) => isActive ? activeStyle : style}>
                <FontAwesomeIcon icon="fa-solid fa-file-circle-check" className="mr-2"/>Leave
            </NavLink>
            <NavLink to="report" end className={({isActive}) => isActive ? activeStyle : style}>
                <FontAwesomeIcon icon="fa-solid fa-file" className="mr-2"/>Report
            </NavLink>
        </div>
        <div className="flex items-center gap-4">
            <div className={
              isSearch ? "flex items-center border border-blue-500 rounded-lg" :
              "flex items-center border border-stale-400 rounded-lg"
            }>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={ isSearch ? "mr-3 p-1 text-blue-500" : "mr-3 p-1"}/>
              <input
              name="search"
              type="text"
              placeholder="search"
              onChange={ handleChange }
              onFocus={ handleFocus }
              onBlur={ handleBlur }
              onKeyPress={ handleKeyPress }
              value={search}
              className="outline-none p-1"
              />
            </div>
            <div className='cursor-pointer'>
                <FontAwesomeIcon icon="fa-solid fa-bell" className='text-2xl'/>
                <FontAwesomeIcon icon="fa-solid fa-circle" className='text-xs absolute text-red-600 -mt-1 -ml-3'/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <p>{studentDetails.name}</p>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
        </div>
    </div>
  )
}

export default UserNav