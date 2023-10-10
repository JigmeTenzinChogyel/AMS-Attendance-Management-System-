import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generateCombinations } from "../../../utils/assign";
import { generateAbbreviation } from "../../../utils/abbreviation";
import { IP } from "../../../utils/ip";

function Assign({ handleView , formData }) {

  const [studentDetails, setStudentDetails] = useState([]);

  const apiUrl = `http://${IP}:3000/api/student/get-all-councilor`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Initialize the "assign" property with an empty array for each student
        const studentsWithAssign = data.map((student) => ({
          ...student,
          assign: [],
        }));
        setStudentDetails(studentsWithAssign);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

    const programme = [
        {
            "id": "1",
            "name": "Information Technology"
        },
        {
            "id": "2",
            "name": "Electronics and Communications Engineering"
        },
        {
            "id": "3",
            "name": "Electrical Engineering"
        },
        {
            "id": "4",
            "name": "Engineering Geology"
        },
        {
            "id": "5",
            "name": "Architecture"
        },
        {
            "id": "6",
            "name": "Instrumentation and Control Engineering"
        },
        {
            "id": "7",
            "name": "Software Engineering"
        },
        {
            "id": "8",
            "name": "Water Resource Engineering"
        },
        {
            "id": "9",
            "name": "Mechanical Engineering"
        },
        {
            "id": "10",
            "name": "Civil Engineering"
        }
    ];

    const year = [
        {
            "id": "1",
            "name": "1"
        },
        {
            "id": "2",
            "name": "2"
        },
        {
            "id": "3",
            "name": "3"
        },
        {
            "id": "4",
            "name": "4"
        },
        {
            "id": "5",
            "name": "5"
        },
    ];
    
    const [ isAssign, setIsAssign ] = useState(false)
    const [ councilor, setCouncilor ] = useState("")
    const result = studentDetails.length != 0 ? generateCombinations(programme, year, studentDetails) : []
    const [ trackCheck, setTrackCheck ] = useState(result)

    if (studentDetails.length != 0) {
      const updatedDetails = studentDetails.map((data) => {
        const filteredTrackCheck = trackCheck.filter((value) => value.assigned === data.studentId);
        const objValues = filteredTrackCheck.map((value) => ({
          year: value.year,
          program: value.program,
          check: value.check,
          assigned: value.assigned,
        }));
        
        data.assign.push(...objValues); // Update the data.assign property
        return data; // Return the updated data object
      });
    }

      
    // const ExpandedComponent = ( studentDetails ) => {
    //   const assignedClasses = studentDetails.data.assign
    //   return <div className="w-full py-4 text-right">
    //       <h2 className="text-xl">Assigned Classes</h2>
    //       {assignedClasses.map((data, index) => {
    //       return <p key={index}>{index+1 + " " + data.year + data.program}</p>}
    //       )}
    //       </div>
    // }; 
    const ExpandedComponent = ( studentDetails ) => <pre>{JSON.stringify(studentDetails.data.assign, null, 2)}</pre>;

    const handleCheck = (data) => {
        setTrackCheck((prevTrackCheck) => {
          return prevTrackCheck.map((value) => {
            if (value.year === data.year && value.program === data.program) {
              return {
                ...value,                 // Spread the existing object properties
                check: !value.check,      // Update the 'check' property to its opposite value
                assigned: !value.check ? councilor : "",  // Update 'assigned' based on 'check'
              };
            } else {
              return value;              // Return the unchanged object
            }
          });
        });
      };
    
    const handleCreate = () => {
      console.log({
        "eventDetails" : formData,
        "assignment" : trackCheck,
      })
    }
    
    const columns = [
        {
          name: '#',
          selector: (row, index) => index + 1,
        },
        {
          name: "Student Id",
          selector: (row) => row.name,
          sortable: true
        },
        {
          name: "Assigned",
          cell: (row) => Object.keys(row.assign).length === 0 ? "Not Assigned" : "Assigned",
        },
        {
          name: "Edit",
          cell: (row) => 
          <button onClick={() => {setIsAssign(!isAssign), setCouncilor(row.name)}}>Assign</button>,
        },
      ];

  return (
    <div>
        <div className={ isAssign ? "z-10 absolute w-full h-screen bg-slate-400 opacity-20 top-0 left-0" : "hidden"}></div>
        <div 
            className={isAssign ? "absolute z-10 flex justify-between p-5 border bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-4/5" : "hidden" }>
            <div className="flex justify-between w-full">
                <div className="border w-1/2 p-2 grid grid-cols-6 grid-rows-6 gap-1">
                    <h2 className="h-fit text-2xl row-span-1 col-span-6 text-center font-semibold">Unassigned Classes</h2>
                    <div className="col-span-3 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">First Year</h2>
                        {trackCheck.map((data, index) => data.assigned === "" && data.year == "1" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="col-span-3 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">Second Year</h2>
                        {trackCheck.map((data, index) => data.assigned === "" && data.year == "2" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="col-span-3 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">Third Year</h2>
                        {trackCheck.map((data, index) => data.assigned === "" && data.year == "3" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="col-span-3 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">Fourth Year</h2>
                        {trackCheck.map((data, index) => data.assigned === "" && data.year == "4" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="col-span-6 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">Fifth Year</h2>
                        {trackCheck.map((data, index) => data.assigned === "" && data.year == "5" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                </div>
                <div className="border w-1/2 p-2 grid grid-cols-6 grid-rows-6 gap-1">
                    <h2 className="h-fit text-2xl row-span-1 col-span-6 text-center font-semibold">Assigned Classes</h2>
                    <div className="col-span-3 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">First Year</h2>
                        {trackCheck.map((data, index) => data.assigned != "" && data.year == "1" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="col-span-3 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">Second Year</h2>
                        {trackCheck.map((data, index) => data.assigned != "" && data.year == "2" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="col-span-3 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">Third Year</h2>
                        {trackCheck.map((data, index) => data.assigned != "" && data.year == "3" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="col-span-3 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">Fourth Year</h2>
                        {trackCheck.map((data, index) => data.assigned != "" && data.year == "4" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                    <div className="col-span-6 row-span-2 grid grid-cols-3">
                        <h2 className="col-span-3 text-xs text-slate-400">Fifth Year</h2>
                        {trackCheck.map((data, index) => data.assigned != "" && data.year == "5" && (
                        <div key={index} className="flex items-center justify-start">
                            <input
                              type="checkbox"
                              checked={data.check}
                              className="mx-2"
                              onChange={() => handleCheck(data)}
                            />
                            <label className="text-xl">
                                {data.year} {generateAbbreviation(data.program)}
                            </label>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            <FontAwesomeIcon 
                icon="fa-solid fa-xmark" 
                className="text-3xl cursor-pointer"
                onClick={() => setIsAssign(!isAssign)}
            />
        </div>
        <DataTable
            columns={columns}
            data={studentDetails}
            title="Event Details List"
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="380px"
            selectableRowsHighlight
            highlightOnHover
            actions={
              <div className="flex gap-5">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-1 px-2 rounded"
                  onClick={ handleCreate }
                  >
                  Create
                </button>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-1 px-2 rounded"
                  onClick={() => handleView(false) }>
                  Back</button>
              </div>
            }
            // subHeader
            // subHeaderComponent={
            //   <input
            //     type="text"
            //     placeholder="Event name..."
            //     className="border border-blue-800 rounded-md py-1 px-3 focus:ring-blue-500 focus:border-blue-500"
            //     value={search}
            //     onChange={(e) => setSearch(e.target.value)}
            //   />
            // }
          />
    </div>
  )
}

export default Assign