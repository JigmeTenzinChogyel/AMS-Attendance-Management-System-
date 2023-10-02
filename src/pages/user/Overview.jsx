import EventCalendar from "../dashboard/components/EventCalendar"
import AttendanceHistory from "./overview/AttendanceHistory"
import Profile from "./overview/Profile"


function Overview() {
  return (
    <div className="flex justify-between py-6 h-full">
        <div className="w-2/3 pl-10 flex flex-col gap-6">
            <h1 className="border-l-8 border-blue-500 text-2xl font-bold pl-4 py-1">User Details</h1>
            <span>Details</span>
            <Profile />
            <h1 className="mt-10 border-l-8 border-blue-500 text-2xl font-bold pl-4 py-1">Attendance History</h1>
            <AttendanceHistory />
        </div>
        <div className="w-1/3 h-screen flex flex-col gap-3 pr-10">
            <h1 className="border-l-8 border-blue-500 text-2xl font-bold pl-4 py-1">Upcoming Events</h1>
            <EventCalendar />
        </div>
    </div>
  )
}

export default Overview