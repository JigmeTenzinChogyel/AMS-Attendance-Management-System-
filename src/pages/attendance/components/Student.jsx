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
    <div className="flex flex-col w-full rounded-lg justify-center items-center bg-white">
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
        <div className="w-full flex flex-col items-start border mt-16 mb-6">
          <h1 className="text-2xl font-semibold p-3 mt-4">Statistics</h1>
          <div className="w-full grid grid-cols-4 p-10">
            <div className="col-span-3 row-span-2 p-4">
              <BarChart />
            </div>
            <div className="row-span-2 flex justify-center items-center p-4">
              <PieChart />
            </div>
            <div className="col-span-3 row-span-2 p-4">
              <LineChart />
            </div>
            <div className="row-span-2 flex justify-center items-center p-4">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;

{/* <div className="w-full">
            <div className="flex justify-center items-center p-5">
              <BarChart />
            </div>
            <div>
              <div className="">
                <LineChart />
              </div>
            </div>
            <div>
              <div>
              <PieChart />
              </div>
            </div>
          </div> */}