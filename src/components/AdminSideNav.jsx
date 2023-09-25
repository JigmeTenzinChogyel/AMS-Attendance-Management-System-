import { Link, useLocation } from "react-router-dom";

function AdminSideNav() {
  const location = useLocation();

  const isNavLinkActive = (path) => {
    return location.pathname === path && "bg-blue-500 text-white";
  };

  const style = "mt-6 p-2 pr-10 pl-10 rounded-full text-xl"
  return (
    <div className="p-2 pl-4 pr-4 w-1/5 h-fit flex flex-col gap-36 items-center">
      <nav>
        <ul>
          <li className={`${style} ${isNavLinkActive("/")}`}>
            <Link to="/">Dashboard</Link>
          </li>
          <li className={`${style}  ${isNavLinkActive("/student")}`}>
            <Link to="/student">Student</Link>
          </li>
          <li className={`${style}  ${isNavLinkActive("/event")}`}>
            <Link to="/event">Event</Link>
          </li>
          <li className={`${style}  ${isNavLinkActive("/leave")}`}>
            <Link to="/leave">Leave</Link>
          </li>
          <li className={`${style}  ${isNavLinkActive("/attendance")}`}>
            <Link to="/attendance">Attendance</Link>
          </li>
        </ul>
      </nav>
      <button className="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Log Out
      </button>
    </div>
  );
}

export default AdminSideNav;