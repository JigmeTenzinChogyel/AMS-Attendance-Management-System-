import { useNavigate } from "react-router-dom";

function Attendance() {
  const navigate = useNavigate()

  const classData = [
    { id: 1, className: "Class A", numberOfStudents: 25 },
    { id: 2, className: "Class B", numberOfStudents: 30 },
    { id: 3, className: "Class C", numberOfStudents: 20 },
    // Add more class data as needed
  ];
  return (
    <div className="w-4/5 pt-10 flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">Assigned Classes</h2>
      </div>
      <div className="flex flex-col gap-3">
        {classData.map((data) => (
          <div 
            key={data.id} 
            className="bg-white rounded-lg shadow-md p-4"
            onClick={() => navigate(`${data.id}`)}>
            <h2 className="text-xl font-semibold mb-2">{data.className}</h2>
            <p className="text-gray-600">
              Number of Students: <span className="text-blue-600">{data.numberOfStudents}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;
