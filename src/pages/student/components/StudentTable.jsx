import DataTable from "react-data-table-component";
import { studentDetails } from "../../../Data/dummyStudent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentTable() {
  
  const navigate = useNavigate()

  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState(studentDetails);

  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1,
    },
    {
      name: "Student No",
      selector: (row) => row.stdNo,
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
      name: "Sex",
      selector: (row) => row.sex,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.Department,
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
      selector: (row) => <button onClick={() => navigate(`${row.id}`)}>Edit</button>,
    },
    {
      name: "Delete",
      selector: (row) => <button onClick={() => handleDelete(row)}>Delete</button>,
    },
  ];

  const handleDelete = data => {
    //handle Delete
    console.log(data)
  }

  useEffect(() => {
    const result = studentDetails.filter((data) => {
      return data.stdNo.toLowerCase().includes(search.toLowerCase()); // Use includes() for substring matching
    });
    setFilteredSearch(result);
  }, [search]);

  return (
    <div className="w-11/12 mt-4 rounded-lg">
      <DataTable
        columns={columns}
        data={filteredSearch}
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
            onClick={() => navigate("create")}>Add</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-1 px-2 rounded">Export</button>
          </div>
        }
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="student no..."
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
