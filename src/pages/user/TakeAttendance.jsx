import DataTable from "react-data-table-component";
import { studentDetails } from "../../Data/dummyStudent.js";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function TakeAttendance() {

  const navigate = useNavigate()

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
    <div className="w-full flex flex-col justify-center items-center">
        <div className="pt-2 w-4/5 mt-6 rounded-lg">
          <div className='flex gap-4 items-center mb-4'>
            <FontAwesomeIcon 
                icon="fa-solid fa-arrow-left" 
                className='text-2xl cursor-pointer' 
                onClick={() => navigate(-1)} />
            <h2 className="text-2xl font-semibold">3 IT</h2>
        </div>
            <DataTable
              columns={columns}
              data={studentDetails}
              className="border"
              pagination
              fixedHeader
              fixedHeaderScrollHeight="550px"
              selectableRowsHighlight
              highlightOnHover
              actions={
                <button 
                    className={
                        isEdit ? "bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-1 px-3 rounded" :
                        "bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-1 px-3 rounded"
                    }
                    onClick={ handleEdit }>
                    { isEdit ? "Save" : "Take"}
                </button>
              }
            />
        </div>
    </div>
  );
}

export default TakeAttendance;
