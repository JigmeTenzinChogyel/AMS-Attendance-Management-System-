import Overview from "./components/Overview"
import Trends from "./components/Trends"
import EventCalendar from "./components/EventCalendar"

function Dashboard() {
  return (
    <div className="flex gap-3 w-full px-4">
      <div className="w-3/4 flex flex-col gap-1">
        <Trends />
        <Overview />
      </div>
      <div className="p-2 flex flex-col items-center w-1/4 bg-white rounded-lg">
        <h1 className="text-xl mt-4 mb-6">Upcoming Events</h1>
        <EventCalendar />
      </div>
    </div>
  )
}

export default Dashboard