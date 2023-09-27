import DataTable from "react-data-table-component";
import { studentDetails } from "../../../Data/dummyStudent";
import LineChart from "../../../components/LineChart";
import BarChart from "../../../components/BarChart";
import PieChart from "../../../components/PieChart";

function Student() {

  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1,
    },
    {
      name: "Event",
      selector: (row) => row.email,
    },
    {
      name: "Status",
      selector: (row) => row.sex,
      sortable: true,
    },
    {
      name: "Remarks",
      selector: (row) => row.sex,
      sortable: true,
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

  return (
    <div className="flex flex-col w-full rounded-lg justify-center items-center">
      <div className="p-4 m-2">
          <label>Search for a student</label>
          <input type="text" placeholder="search..." className="px-2 py-1 border"/>
        </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-3/4 border">
          <DataTable
            columns={columns}
            data={ studentDetails }
            pagination
            fixedHeader
            fixedHeaderScrollHeight="300px"
            selectableRowsHighlight
            highlightOnHover
          />
        </div>
        <div className="w-full flex flex-col items-start">
          <h1>Statistics</h1>
          <div className="w-full">
            <LineChart />
            <BarChart />
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
