/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function UserSideNav({ addTitle }) {

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
    <div className="bg-white mt-24 py-4 w-1/6 flex flex-col gap-36 items-center fixed z-10">
      <nav className="flex flex-col p-3 gap-2 w-3/4 justify-center">
        <NavLink to="userprofile" end className={ ({isActive}) => isSelected(isActive, "Home")}>Home </NavLink>
        <NavLink to="Applyleave" end className={ ({isActive}) => isSelected(isActive, "ApplyLeave")}>Leave Management</NavLink>
      </nav>
      <button className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Log Out
      </button>
    </div>
  );
}

export default UserSideNav;
