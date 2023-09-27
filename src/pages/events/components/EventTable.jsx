import DataTable from "react-data-table-component";
import { studentDetails } from "../../../Data/dummyStudent";
import { useEffect, useState } from "react";

function EventTable() {
  
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState(studentDetails);

  const columns = [
    {
        name: '#',
        cell: (row, index) => index + 1,
    },
    {
        name: "Title",
        selector: (row) => row.name,
        sortable: true
    },
    {
      name: "Description",
      selector: (row) => row.email,
    },
    {
      name: "Date",
      selector: (row) => row.sex,
    },
    {
      name: "Status",
      selector: (row) => row.Department,
    },
    {
      name: "Edit",
      selector: (row) => <button>Edit</button>,
    },
    {
      name: "Delete",
      selector: (row) => <button>Delete</button>,
    },
  ];

  useEffect(() => {
    const result = studentDetails.filter((data) => {
      return data.name.toLowerCase().includes(search.toLowerCase()); // Use includes() for substring matching
    });
    setFilteredSearch(result);
  }, [search]);

  return (
    <div className="w-11/12 mt-4 rounded-lg">
      <DataTable
        columns={columns}
        data={filteredSearch}
        title="Event Details List"
        pagination
        fixedHeader
        fixedHeaderScrollHeight="380px"
        selectableRowsHighlight
        highlightOnHover
        actions={
          <div className="flex gap-5">
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-1 px-2 rounded">Create</button>
          </div>
        }
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="event name..."
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
