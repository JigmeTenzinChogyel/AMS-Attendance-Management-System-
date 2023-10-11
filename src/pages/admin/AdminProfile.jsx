
function AdminProfile() {



    // const studentDetails = {
    //     name: "John Doe",
    //     studentId: "123456",
    //     gender: "Male",
    //     email: "john.doe@example.com",
    //   };
    //
    //   const classDetails = {
    //     programme: "Computer Science",
    //   };
    //
    //   const role = "Student"; //
    //  You can change this to "Councilor" to test the condition
    const studentDetails = JSON.parse(localStorage.getItem('studentDetails'))
    const classDetails = JSON.parse(localStorage.getItem('classDetails'))
    const role = localStorage.getItem('role')

  return (
    <div className="m-3 px-6 py-4 bg-white font-Roboto flex items-center">
        <div className="flex flex-col gap-6 bg-white">
            <h2 className="text-2xl font-semibold mb-6">Admin Details</h2>
            <div className="flex gap-4 items-center">
                <p className="text-slate-400 text-sm font-semibold mb-1">Name:</p>
                <h3 className="text-lg font-semibold">{studentDetails.name}</h3>
            </div>
            <div className="flex gap-4 items-center">
                <p className="text-slate-400 text-sm font-semibold mb-1">Student Id:</p>
                <h4 className="text-lg font-semibold">{studentDetails.studentId}</h4>
            </div>
            <div className="flex gap-4 items-center">
                <p className="text-slate-400 text-sm font-semibold mb-1">Gender:</p>
                <p className="text-lg font-semibold">{studentDetails.gender}</p>
            </div>
            <div className="flex gap-4 items-center">
                <p className="text-slate-400 text-sm font-semibold mb-1">Role</p>
                <h3 className="text-lg font-semibold">{role}</h3>
            </div>
            <div className="flex gap-4 items-center">
                <p className="text-slate-400 text-sm font-semibold mb-1">Email Address</p>
                <h3 className="text-lg font-semibold">{studentDetails.email}</h3>
            </div>
            <div className="flex gap-4 items-center">
                <p className="text-slate-400 text-sm font-semibold mb-1">Programme</p>
                <h3 className="text-lg font-semibold">{classDetails.programme}</h3>
            </div>
            <div className="my-12">
                <button 
                    className="border bg-red-500 px-4 py-2 text-xl text-white font-semibold rounded-lg hover:bg-red-700 active:bg-red-300">
                        Change Admin
                </button>
            </div>
        </div>
    </div>
  )
}

export default AdminProfile