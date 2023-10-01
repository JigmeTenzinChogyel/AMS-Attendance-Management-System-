/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function AdminSideNav() {

  const style = "px-4 my-2 py-2 text-base text-black font-semibold"
  const activeStyle = "px-4 my-2 py-2 text-base text-white font-semibold bg-blue-500 rounded-full"

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

  //function for the user to log out
  const logOut = () => {
    //logout
  }

  return (
    <div className="bg-white mt-24 py-4 w-1/6 flex flex-col items-center fixed z-10">
      <div className={isSearch ? "py-1 px-2 border border-blue-600 rounded-md w-3/4" : "py-1 px-2 border border-stale-800 rounded-md w-3/4" }>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='font-2xl text-black'/>
        <input 
        type='text' 
        placeholder='Search'
        value={search}
        onChange={ handleChange }
        onKeyDown={ handleKeyPress }
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='ml-2 p-1 w-3/4 outline-none'/>
      </div>
      <div className="w-full flex flex-col items-center gap-48">
        <nav className="flex flex-col p-3 w-3/4 justify-center">
          <NavLink to="." end className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-compass" className="mr-3"/>Dashboard</NavLink>
          <NavLink to="student" end className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-id-card" className="mr-3"/>Student</NavLink>
          <NavLink to="event" end className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-calendar" className="mr-3"/>Event</NavLink>
          <NavLink to="leave" end className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-file-circle-check" className="mr-3"/>Leave</NavLink>
          <NavLink to="attendance" className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-file-pen" className="mr-3"/>Attendance</NavLink>
        </nav>
        <span 
        onClick={ logOut }
        className="w-full border-t-2 py-3 text-center font-semibold cursor-pointer">
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className="text-blue-500"/> Logout</span>
      </div>
    </div>
  );
}

export default AdminSideNav;
