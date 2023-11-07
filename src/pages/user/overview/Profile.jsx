import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faUserCheck, faUserSlash, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import { IP } from "../../../utils/ip";

function Profile() {
  const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
  const classDetails = JSON.parse(localStorage.getItem("classDetails"));
  const role = localStorage.getItem("role");

  const [stats, setStats] = useState(null);

  const cardStyle =
    "w-1/4 flex items-center gap-4 rounded-lg border border-slate-300 bg-white py-4 px-6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${IP}:3000/api/student/get-student-dashboard-info/${studentDetails.studentId}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (stats === null) {
    // You can render a loading indicator here while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold">{studentDetails.name}</h2>
        <h4 className="text-lg font-semibold">{studentDetails.studentId}</h4>
        <p className="text-lg font-semibold">{studentDetails.gender}</p>
      </div>
      <div className="flex items-center gap-10">
        <div>
          <p className="text-slate-400 text-sm font-semibold mb-2">Role</p>
          <h3 className="text-lg font-semibold">{role}</h3>
        </div>
        <div>
          <p className="text-slate-400 text-sm font-semibold mb-2">Email Address</p>
          <h3 className="text-lg font-semibold">{studentDetails.email}</h3>
        </div>
        <div>
          <p className="text-slate-400 text-sm font-semibold mb-2">Programme</p>
          <h3 className="text-lg font-semibold">{classDetails.programme}</h3>
        </div>
      </div>
      <div className="flex gap-4 w-11/12">
        <div className={cardStyle}>
          <div>
            <FontAwesomeIcon icon={faFilePen} className="text-blue-600 text-3xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{stats.total_events}</h3>
            <p className="text-slate-400 text-sm font-semibold mb-2">Total Attendances</p>
          </div>
        </div>
        <div className={cardStyle}>
          <div>
            <FontAwesomeIcon icon={faUserCheck} className="text-blue-600 text-3xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{stats.total_presents}</h3>
            <p className="text-slate-400 text-sm font-semibold mb-2">Total Presents</p>
          </div>
        </div>
        <div className={cardStyle}>
          <div>
            <FontAwesomeIcon icon={faUserSlash} className="text-blue-600 text-3xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{stats.total_absents}</h3>
            <p className="text-slate-400 text-sm font-semibold mb-2">Total Absents</p>
          </div>
        </div>
        <div className={cardStyle}>
          <div>
            <FontAwesomeIcon icon={faUserInjured} className="text-blue-600 text-3xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{stats.total_leaves}</h3>
            <p className="text-slate-400 text-sm font-semibold mb-2">Total Leaves</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
