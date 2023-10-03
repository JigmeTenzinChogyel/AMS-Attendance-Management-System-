import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentTable() {
  const apiUrl = 'http://192.168.137.32:3000/api/student/get-all-students';
  const navigate = useNavigate();
  
  const [students, setStudents] = useState([]); // Change the state variable name to "students"
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
        setStudents(data); // Change the state setter to setStudents
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1,
    },
    {
      name: "Student No",
      selector: (row) => row.studentId,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Programme",
      selector: (row) => row.programme,
    },
    {
      name: "Semester",
      selector: (row) => row.semester,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Edit",
      cell: (row) => <button onClick={() => navigate(`edit/${row.id}`)}>Edit</button>, // Added cell property
    },
    {
      name: "Delete",
      cell: (row) => <button onClick={() => handleDelete(row)}>Delete</button>, // Added cell property
    },
  ];

  const handleDelete = (data) => {
    // Handle Delete
    console.log(data);
  };

  const filteredStudents = students.filter((data) => {
    return data.studentId.toLowerCase().includes(search.toLowerCase()); // Use optional chaining
  });

  return (
    <div className="w-11/12 mt-4 rounded-lg">
      <DataTable
        columns={columns}
        data={ filteredStudents }
        title="Student Details List"
        pagination
        fixedHeader
        fixedHeaderScrollHeight="380px"
        selectableRowsHighlight
        highlightOnHover
        actions={
          <div className="flex gap-5">
            <button 
              className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-1 px-2 rounded"
              onClick={() => navigate("create")}
            >
              Add
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-1 px-2 rounded">Export</button>
          </div>
        }
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Student No..."
            className="border border-blue-800 rounded-md py-1 px-3 focus:ring-blue-500 focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </div>
  );
}

export default StudentTable;
