import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

function Profile() {

    const navigate = useNavigate()

    const handleCLick = () => {
        navigate("take")
    }

  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Name</h1>
            <h4 className="text-lg font-semibold">Student Number</h4>
            <p className="text-lg font-semibold">Gender</p>
        </div>
        <div className="flex items-center gap-10">
            <div>
                <p className="text-slate-400 text-sm font-semibold mb-2">Role</p>
                <h3 className="text-lg font-semibold">Student</h3>
            </div>
            <div>
                <p className="text-slate-400 text-sm font-semibold mb-2">Email Address</p>
                <h3 className="text-lg font-semibold">example@gmail.com</h3>
            </div>
            <div>
                <p className="text-slate-400 text-sm font-semibold mb-2">Department</p>
                <h3 className="text-lg font-semibold">Information Technology</h3>
            </div>
        </div>
        <div className="flex gap-5">
            <div className="flex items-center gap-5 rounded-lg bg-slate-200 py-4 px-6">
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-file-pen" className="text-3xl"/>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">306</h3>
                    <p className="text-slate-400 text-sm font-semibold mb-2">Total Attendance</p>
                </div>
            </div>
            <div className="flex items-center gap-5 rounded-lg bg-slate-200 py-4 px-6">
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-file-pen" className="text-3xl"/>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">306</h3>
                    <p className="text-slate-400 text-sm font-semibold mb-2">Total Attendance</p>
                </div>
            </div>
            <div className="flex items-center gap-5 rounded-lg bg-slate-200 py-4 px-6">
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-file-pen" className="text-3xl"/>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">306</h3>
                    <p className="text-slate-400 text-sm font-semibold mb-2">Total Attendance</p>
                </div>
            </div>
            <div className="flex items-center gap-5 rounded-lg bg-slate-200 py-4 px-6">
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-file-pen" className="text-3xl"/>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">306</h3>
                    <p className="text-slate-400 text-sm font-semibold mb-2">Total Attendance</p>
                </div>
            </div>
        </div>
        <button
        className="bg-blue-500 w-fit text-xl font-semibold text-white p-5 rounded-lg active:bg-blue-400 hover:bg-blue-600"
        onClick={ handleCLick }>
            Take Attendance
        </button>
    </div>
  )
}

export default Profile