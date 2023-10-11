import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './calendar.css'
import { useState, useEffect } from 'react'
import {IP} from "../../../utils/ip.js";

function EventCalendar() {

  const localizer = momentLocalizer(moment)
  const apiUrl = `http://${IP}:3000/api/events/getAllEvents`;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data)
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const transformedEventData = events.map((serverEvent) => {
    return {
      id: serverEvent.id,
      title: serverEvent.title,
      start: new Date(serverEvent.startTime),
      end: new Date(serverEvent.startTime), // You can adjust the end time if needed
    };
  });

  return (
      <Calendar
      localizer={localizer}
      events={ transformedEventData }
      views={{
        day: false,
        week: false,
        month: true,
      }}
      startAccessor="start"
      endAccessor="end"
    />
  )
}

export default EventCalendar