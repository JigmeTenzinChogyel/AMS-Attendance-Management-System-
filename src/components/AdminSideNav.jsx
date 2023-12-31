/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function AdminSideNav() {

  const navigate = useNavigate()

  const style = "px-4 my-2 py-2 text-black font-semibold"
  const activeStyle = "px-4 my-2 py-2 text-white font-semibold bg-blue-500 rounded-lg"

  //When the user enters in the search bar
  const [ search, setSearch ] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
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
    navigate('/')
    localStorage.clear()
  }

  return (
    <div className=" bg-white mt-20 pt-6 pb-4 h-full w-1/6 flex flex-col gap-32 items-center fixed ">
      <div>
        <div className={
          isSearch ? "flex items-center border border-blue-500 rounded-lg p-1" :
          "flex items-center border border-stale-400 rounded-lg p-1"
        }>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={ isSearch ? "mr-3 p-1 text-blue-500" : "mr-3 p-1"}/>
          <input
          name="search"
          type="text"
          placeholder="search"
          onChange={ handleChange }
          onFocus={ handleFocus }
          onBlur={ handleBlur }
          value={search}
          className="outline-none p-1"
          />
        </div>
        <nav className="flex flex-col p-3 w-full justify-center my-2">
          <NavLink to="." end className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-compass" className="mr-3"/>Overview</NavLink>
          <NavLink to="attendance" className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-file-pen" className="mr-3"/>Attendance</NavLink>
          <NavLink to="student" className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-id-card" className="mr-3"/>Student</NavLink>
          <NavLink to="event" className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-calendar" className="mr-3"/>Event</NavLink>
          <NavLink to="leave" className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-file-circle-check" className="mr-3"/>Leave</NavLink>
          <NavLink to="report" className={ ({isActive}) => isActive ? activeStyle : style}>
          <FontAwesomeIcon icon="fa-solid fa-file-lines" className="mr-3"/>Report</NavLink>
        </nav>
      </div>
      <div className="border-slate-300 border-t w-full text-center pt-4">
        <button onClick={ logOut } className="font-semibold">
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className="text-blue-500 mr-3"/>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSideNav;
