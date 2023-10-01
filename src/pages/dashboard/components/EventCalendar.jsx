import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import myEventsList from '../../../Data/MyEventList'
import './calendar.css'

function EventCalendar() {

  const localizer = momentLocalizer(moment)

  return (
    <div className="h-3/4 p-2">
      <Calendar
      localizer={localizer}
      events={myEventsList}
      views={{
        day: false,
        week: false,
        month: true,
      }}
      startAccessor="start"
      endAccessor="end"
    />
    </div>
  )
}

export default EventCalendar