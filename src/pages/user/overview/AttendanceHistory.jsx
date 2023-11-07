import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { eventDateFormat } from "./../../../utils/dateFromat"; // Import the date formatting function
import { IP } from "../../../utils/ip";

function AttendanceHistory() {
    const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${IP}:3000/api/attendance/get-all-attendance-of-student/${studentDetails.studentId}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAttendanceData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-4">
      {attendanceData.map((entry, index) => (
        <div key={index} className={`w-1/3 flex flex-col gap-5 rounded-lg py-4 px-6 bg-slate-200`}>
          <div className="flex justify-between">
            <p className="font-semibold">
              <FontAwesomeIcon icon="fa-solid fa-clock" className="mr-2 text-blue-500" />
              {eventDateFormat(entry.date)}
            </p>
            <div className={`rounded-full p-1 text-xs text-white w-fit ${entry.status === 'PRESENT' ? 'bg-green-500' : 'bg-slate-400'}`}>
              {entry.status === 'PRESENT' ? 'On Time' : 'Absent'}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-slate-400 text-sm">Type</p>
            <h3 className="text-lg font-semibold">{entry.event_name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AttendanceHistory;
