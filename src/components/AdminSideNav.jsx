/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminSideNav({ addTitle }) {
  const navigate = useNavigate(); //for redirecting

  const style = "px-4 my-2 py-2 text-xl text-black"
  const activeStyle = "px-4 my-2 py-2 text-xl text-white bg-blue-500 rounded-full"

  const isSelected = ( active, value ) => {
    console.log(active)
    if (active == true) {
      addTitle(value)
      return activeStyle
    }
    else {
      return style
    }
  }

  return (
    <div className="bg-white mt-24 py-4 w-1/6 flex flex-col gap-36 items-center fixed">
      <nav className="flex flex-col p-3 gap-2 w-3/4 justify-center">
        <NavLink to="." end className={ ({isActive}) => isSelected(isActive, "Dashboard")}>Dashboard</NavLink>
        <NavLink to="student" end className={ ({isActive}) => isSelected(isActive, "Student")}>Student</NavLink>
        <NavLink to="event" end className={ ({isActive}) => isSelected(isActive, "Event")}>Event</NavLink>
        <NavLink to="leave" end className={ ({isActive}) => isSelected(isActive, "Leave")}>Leave</NavLink>
        <NavLink to="attendance" className={ ({isActive}) => isSelected(isActive, "Attendance")}>Attendance</NavLink>
      </nav>
      <button className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
           // Clear the tokens from localStorage
           localStorage.removeItem('refreshToken');
           localStorage.removeItem('accessToken');

           //redirect to login page
           navigate("/");

        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default AdminSideNav;
