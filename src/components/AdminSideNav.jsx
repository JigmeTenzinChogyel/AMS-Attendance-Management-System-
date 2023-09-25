import { Link } from "react-router-dom"

function AdminSideNav() {
  return (
    <div>
        <nav className="">
            <Link to=".">Dashboard</Link>
            <Link to="/student">Students</Link>
            <Link to="/event">Events</Link>
            <Link to="/leave">Leave</Link>
            <Link to="/attendance">Attendance</Link>
        </nav>
        <button>Log Out</button>
    </div>
  )
}

export default AdminSideNav