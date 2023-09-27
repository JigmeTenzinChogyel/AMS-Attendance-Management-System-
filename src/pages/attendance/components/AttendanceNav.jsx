import { NavLink } from "react-router-dom";

function AttendanceNav() {

  const activeStyle = "p-2 mx-2 text-blue-500"
  const style = "p-2 mx-2 hover:text-blue-500"

  return (
    <div className="py-2 mx-1 my-4 fixed w-full bg-white">
      <NavLink
          to="."
          end
          className={({isActive}) => isActive ? activeStyle: style}
        >
        Dashboard
      </NavLink>
      <NavLink
          to="student"
          end
          className={({isActive}) => isActive ? activeStyle: style} 
        >
        Student
      </NavLink>
      <NavLink
          to="event"
          end
          className={({isActive}) => isActive ? activeStyle: style} 
        >
        Event
      </NavLink>
      <NavLink
          to="report"
          end
          className={({isActive}) => isActive ? activeStyle: style} 
        >
        Report
      </NavLink>
    </div>
  );
}

export default AttendanceNav;
