import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { eventDateFormat, eventToday } from "../../../utils/dateFromat";
import { useNavigate } from "react-router-dom";

function EventTable() {
  const apiUrl = 'http://192.168.137.32:3000/api/events/getAllEvents';
  const navigate = useNavigate();
  
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Date",
      selector: (row) => eventDateFormat(row.startTime),
    },
    {
      name: "Event Type",
      selector: (row) => row.eventType,
    },
    {
      name: "Status",
      selector: (row) => (eventToday(row.startTime)) ? "Finished" : "Unfinished",
    },
    {
      name: "Edit",
      cell: (row) => <button onClick={() => navigate(`${row.id}`)}>Edit</button>,
    },
    {
      name: "Delete",
      cell: (row) => (
        <button onClick={() => confirmDelete(row)}>Delete</button>
      ),
    },
  ];

  const confirmDelete = (row) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this event?");
    if (shouldDelete) {
      // Call a function to handle the deletion of the event
      handleDelete(row);
    }
  };

  const handleDelete = async (data) => {
    try {
      // Replace 'your-api-url' with the actual URL of your API endpoint for deleting events
      const response = await fetch(`http://192.168.137.32:3000/api/events/deleteEventById/${data.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Remove the deleted event from the client-side list
      const updatedEvents = events.filter((event) => event.id !== data.id);
      setEvents(updatedEvents);

      // Optionally, you can display a success message or handle other actions
      console.log('Event deleted successfully:', data);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
    try {
      console.log('Deleting event:', data);
      // ...
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const filteredEvents = events.filter((data) => {
    return data.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="w-11/12 mt-4 rounded-lg">
      <DataTable
        columns={columns}
        data={filteredEvents}
        title="Event Details List"
        pagination
        fixedHeader
        fixedHeaderScrollHeight="380px"
        selectableRowsHighlight
        highlightOnHover
        actions={
          <div className="flex gap-5">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-1 px-2 rounded"
              onClick={() => navigate("create")} >
              Create
            </button>
          </div>
        }
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Event name..."
            className="border border-blue-800 rounded-md py-1 px-3 focus:ring-blue-500 focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </div>
  );
}

export default EventTable;
