import { Outlet } from "react-router-dom"
import AttendanceNav from "./components/AttendanceNav"

function Attendance() {
  return (
    <div className="flex flex-col m-2 w-full rounded-lg bg-white">
      <AttendanceNav />
      <div className="flex w-full mt-16 bg-slate-50">
        <Outlet />
      </div>
    </div>
  )
}

export default Attendance