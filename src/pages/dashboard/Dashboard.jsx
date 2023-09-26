import Overview from "./components/Overview"
import Trends from "./components/Trends"
import Notification from "./components/Notification"
import EventCalendar from "./components/EventCalendar"

function Dashboard() {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-3/4 flex flex-col gap-1">
        <Trends />
        <Overview />
      </div>
      <div className="px-4 py-1 flex flex-col justify-between gap-3 w-1/4">
        <Notification />
        <EventCalendar />
      </div>
    </div>
  )
}

export default Dashboard