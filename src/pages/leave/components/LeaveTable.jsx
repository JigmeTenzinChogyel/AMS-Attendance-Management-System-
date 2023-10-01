import DataTable from "react-data-table-component";
import { studentDetails } from "../../../Data/dummyStudent";

function LeaveTable() {

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
    name: "Support",
    selector: (row) => row.email,
  },
  {
    name: "Start",
    selector: (row) => row.sex,
  },
  {
    name: "End",
    selector: (row) => row.sex,
  },
  {
    name: "Status",
    selector: (row) => row.Department,
  },
  {
    name: "Approve",
    selector: (row) => <input type="checkBox" className="ml-4" />,
  },
  {
    name: "Details",
    selector: (row) => <button>View</button>,
  },
];

  return (
    <div className="w-11/12 mt-4 rounded-lg">
      <DataTable
        columns={columns}
        data={ studentDetails }
        title="Leave Details List"
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectableRowsHighlight
        highlightOnHover
      />
    </div>
  );
}

export default LeaveTable;
