import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom";

function UserNav() {
  const navigate = useNavigate()

  const data = JSON.parse(localStorage.getItem('studentDetails'))
  const studentDetails = data.name
  const role = localStorage.getItem('role')
    //active link or nav bar
    const style = "px-4 my-2 py-2 text-lg text-black font-semibold"
    const activeStyle = "px-4 my-2 py-2 text-lg text-blue-500 font-semibold border-b-2 border-blue-500"

    const handleLogout = () => {
      //handle Logout
        localStorage.clear()
        navigate("/")
    }

  return (
    <div className="bg-white w-full flex justify-between items-center px-5 py-2 top-0 fixed z-10 border-b">
        <div className="flex items-center gap-6 text-lg font-semibold">
            <img src={ logo } className="w-20 h-20"/>
            <NavLink to="." end className={({isActive}) => isActive ? activeStyle : style}>
                <FontAwesomeIcon icon="fa-solid fa-compass" className="mr-2"/>Overview
            </NavLink>
            {
              role == "councilor" &&             
              <NavLink to="attendance" className={({isActive}) => isActive ? activeStyle : style}>
                <FontAwesomeIcon icon="fa-solid fa-file-pen" className="mr-2"/>Attendance
              </NavLink>
            }
            <NavLink to="leave" end className={({isActive}) => isActive ? activeStyle : style}>
                <FontAwesomeIcon icon="fa-solid fa-file-circle-check" className="mr-2"/>Leave
            </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <div className='cursor-pointer' onClick={() => navigate("notification")}>
              <FontAwesomeIcon icon="fa-solid fa-bell" className='text-2xl text-blue-500'/>
              <FontAwesomeIcon icon="fa-solid fa-circle" className='text-xs absolute text-red-600 -mt-1 -ml-3'/>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
              <p>{studentDetails}</p>
              <FontAwesomeIcon 
                icon="fa-solid fa-arrow-right-from-bracket"
                onClick={ handleLogout } />
          </div>
        </div>
    </div>
  )
}

export default UserNav