import { NavLink } from "react-router-dom";

function AttendanceNav() {

  const activeStyle = "p-2 mx-2 text-blue-500"
  const style = "p-2 mx-2 hover:text-blue-500"

  return (
    <div className="fixed w-full -mt-4 z-10 border-b-2 mb-6">
      <div className="h-6 bg-slate-100"></div>
      <div className="py-8 px-1 w-full bg-white">
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
    </div>
  );
}

export default AttendanceNav;
