import { NavLink } from "react-router-dom";

function AttendanceNav() {
    //the nav links work but need to fix the bug where both the links are active at the same time
  return (
    <div className="py-2 mx-1 my-4 fixed w-full bg-white">
      <NavLink
          to="."
          className={({isActive}) => isActive ? "p-2 mx-2 text-blue-500": "p-2 mx-2 hover:text-blue-500" }
        >
        Dashboard
      </NavLink>
      <NavLink
          to="student"
          className={({isActive}) => isActive ? "p-2 mx-2 text-blue-500": "p-2 mx-2 hover:text-blue-500" }
        >
        Student
      </NavLink>
      <NavLink
          to="event"
          className={({isActive}) => isActive ? "p-2 mx-2 text-blue-500": "p-2 mx-2 hover:text-blue-500" }
        >
        Event
      </NavLink>
      <NavLink
          to="report"
          className={({isActive}) => isActive ? "p-2 mx-2 text-blue-500": "p-2 mx-2 hover:text-blue-500" }
        >
        Report
      </NavLink>
    </div>
  );
}

export default AttendanceNav;
