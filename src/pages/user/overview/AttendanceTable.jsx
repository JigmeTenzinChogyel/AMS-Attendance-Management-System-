import DataTable from "react-data-table-component";
import { studentDetails } from "../../../Data/dummyStudent.js";
import { useEffect, useState } from "react";

function AttendanceTable() {
  
  // const [search, setSearch] = useState("");
  // const [filteredSearch, setFilteredSearch] = useState(studentDetails);

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
  ];

  // useEffect(() => {
  //   const result = studentDetails.filter((data) => {
  //     return data.stdNo.toLowerCase().includes(search.toLowerCase()); // Use includes() for substring matching
  //   });
  //   setFilteredSearch(result);
  // }, [search]);

  return (
    <div className="py-5 px-10 mt-4 rounded-lg">
      <DataTable
        columns={columns}
        data={
          // filteredSearch
          []
        }
        title="Your Attendance details"
        pagination
        fixedHeader
        fixedHeaderScrollHeight="380px"
        selectableRowsHighlight
        highlightOnHover
        actions={
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-1 px-2 rounded">Export</button>
        }
        // subHeader
        // subHeaderComponent={
        //   <input
        //     type="text"
        //     placeholder="event"
        //     className="border border-blue-800 rounded-md py-1 px-3 focus:ring-blue-500 focus:border-blue-500"
        //     value={search}
        //     onChange={(e) => setSearch(e.target.value)}
        //   />
        // }
      />
    </div>
  );
}

export default AttendanceTable;
