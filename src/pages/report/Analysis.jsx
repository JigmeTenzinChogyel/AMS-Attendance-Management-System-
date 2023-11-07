import DataTable from "react-data-table-component";

function Analysis() {
  const myData = [
    {
      Class: {
        programme: "IT",
        semester: "iv"
      },
      totalEvents: 3,
      classStrength: 30,
      totalPresents: 110,
      totalAbsents: 5,
      totalLeaves: 2
    },
    {
      Class: {
        programme: "Business Management",
        semester: "III"
      },
      totalEvents: 5,
      classStrength: 40,
      totalPresents: 35,
      totalAbsents: 3,
      totalLeaves: 2
    },
    {
      Class: {
        programme: "Computer Science",
        semester: "V"
      },
      totalEvents: 4,
      classStrength: 50,
      totalPresents: 48,
      totalAbsents: 2,
      totalLeaves: 1
    },
    {
      Class: {
        programme: "Electrical Engineering",
        semester: "II"
      },
      totalEvents: 6,
      classStrength: 25,
      totalPresents: 20,
      totalAbsents: 4,
      totalLeaves: 1
    }
  ];

  // Define columns for the DataTable
  const columns = [
    {
      name: "Class",
      selector: (row) => `${row.Class.programme} - ${row.Class.semester}`,
      sortable: true,
    },
    {
      name: "Events",
      selector: "totalEvents",
      sortable: true,
    },
    {
      name: "Strength",
      selector: "classStrength",
      sortable: true,
    },
    {
      name: "Presents",
      selector: "totalPresents",
      sortable: true,
    },
    {
      name: "Absents",
      selector: "totalAbsents",
      sortable: true,
    },
    {
      name: "Leaves",
      selector: "totalLeaves",
      sortable: true,
    },
  ];

  return (
    <div className="p-3 flex flex-col gap-3 mt-5">
      <h2 className="text-lg font-semibold">3. Class Wise Analysis</h2>
      <div className="border-2 p-4 m-4">
        <DataTable 
        columns={columns} 
        data={myData}
        fixedHeaderScrollHeight="400px"
        selectableRowsHighlight
        highlightOnHover/>
      </div>
    </div>
  );
}

export default Analysis;
