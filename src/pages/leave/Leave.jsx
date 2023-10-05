import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { eventDateFormat, eventToday } from "../../utils/dateFromat";
import { useNavigate } from "react-router-dom";
import exportFromJSON from "export-from-json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dummyLeave } from "../../Data/dummyLeave";

function Leave() {
  const navigate = useNavigate();

  // const apiUrl = 'http://192.168.137.32:3000/api/events/getAllEvents';
  // const [events, setEvents] = useState([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       setEvents(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const columns = [
    {
      name: '#',
      selector: (row, index) => index + 1,
    },
    {
      name: "Sender",
      selector: (row) => row.title,
      sortable: true
    },
    {
      name: "Event",
      selector: (row) => row.eventType,
      sortable: true
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true
    },
    {
      name: "Start Date",
      selector: (row) => eventDateFormat(row.startTime),
      sortable: true
    },
    {
      name: "End Date",
      selector: (row) => eventDateFormat(row.duration),
      sortable: true
    },
    {
      name: "Status",
      selector: (row) => row.status,
    //   <div 
    //     onClick={ () => handleStatus(row.id)}
    //     className="ml-2">
    //       {
    //         row.status === "approved" ? (
    //           <FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-lg text-green-400" />
    //         ) : row.status === "denied" ? (
    //           <FontAwesomeIcon icon="fa-solid fa-circle-xmark" className="text-lg text-red-400" />
    //         ) : (
    //           <FontAwesomeIcon icon="fa-solid fa-clock" className="text-lg text-blue-400" />
    //         )
    //       }
    // </div>,
    sortable: true
    },
    {
      name: "Details",
      cell: (row) => 
      <button 
      onClick={() => navigate(`${row.id}`) }
      className="ml-2 text-lg text-blue-400">
        <FontAwesomeIcon icon="fa-solid fa-eye" />
      </button>
    },
  ];

  const handleStatus = data => {
    //handle status
    console.log(data)
  }

  const onExport = () => {
    const data = dummyLeave
    const fileName = 'events_download'
    const exportType =  exportFromJSON.types.csv
    exportFromJSON({ data, fileName, exportType })
  }

  // const filteredEvents = events.filter((data) => {
  //   return data.title.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <div className="w-11/12 mt-4 rounded-lg">
      <DataTable
        columns={columns}
        data={dummyLeave}
        title="Leave List"
        pagination
        fixedHeader
        fixedHeaderScrollHeight="380px"
        selectableRowsHighlight
        highlightOnHover
        actions={
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-1 px-2 rounded"
            onClick={ onExport }>
            Export</button>
        }
        // subHeader
        // subHeaderComponent={
        //   <input
        //     type="text"
        //     placeholder="Event name..."
        //     className="border border-blue-800 rounded-md py-1 px-3 focus:ring-blue-500 focus:border-blue-500"
        //     value={search}
        //     onChange={(e) => setSearch(e.target.value)}
        //   />
        // }
      />
    </div>
  );
}

export default Leave;
