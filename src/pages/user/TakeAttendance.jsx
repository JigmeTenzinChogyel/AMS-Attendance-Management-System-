import DataTable from "react-data-table-component";
import { studentDetails } from "../../Data/dummyStudent.js";
import { useState } from "react";

function TakeAttendance() {

    const [ isEdit, setIsEdit ] = useState( false )

    const handleEdit = () => {
        setIsEdit((isEdit) => !isEdit)
    }

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
          name: "Event",
          selector: (row) => row.name,
        },
        {
          name: "Status",
          selector: (row) => isEdit ? <input type="checkBox" className="ml-4" /> : row.role,
        },
    ];

  return (
    <div className="flex justify-center items-center">
        <div className="pt-2 w-2/3 mt-4 rounded-lg">
            <DataTable
              columns={columns}
              data={studentDetails}
              title="Assigned: 3 IT"
              pagination
              fixedHeader
              fixedHeaderScrollHeight="450px"
              selectableRowsHighlight
              highlightOnHover
              actions={
                <button 
                    className={
                        isEdit ? "bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-1 px-3 rounded" :
                        "bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-1 px-3 rounded"
                    }
                    onClick={ handleEdit }>
                    { isEdit ? "Save" : "Edit"}
                </button>
              }
            />
        </div>
    </div>
  );
}

export default TakeAttendance;
