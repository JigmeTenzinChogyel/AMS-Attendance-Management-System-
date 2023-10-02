import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AttendanceHistory() {
  return (
    <div className="flex gap-4">
        <div className="w-1/3 flex flex-col gap-5 rounded-lg bg-slate-200 py-4 px-6">
            <div className="flex justify-between">
                <p className="font-semibold">
                    <FontAwesomeIcon icon="fa-solid fa-clock" className="mr-2 text-blue-500"/>Date
                </p>
                <div className="bg-green-500 rounded-full p-1 text-xs text-white w-fit">On Time</div>
                {
                    // <div className="bg-slate-400 rounded-full p-1 px-2 text-xs text-slate-50 w-fit">Absent</div>
                }
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-slate-400 text-sm">Type</p>
                <h3 className="text-lg font-semibold">Assembly</h3>
            </div>
        </div>
        <div className="w-1/3 flex flex-col gap-5 rounded-lg bg-slate-200 py-4 px-6">
            <div className="flex justify-between">
                <p className="font-semibold">
                    <FontAwesomeIcon icon="fa-solid fa-clock" className="mr-2 text-blue-500"/>Date
                </p>
                <div className="bg-slate-400 rounded-full p-1 px-2 text-xs text-slate-50 w-fit">Absent</div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-slate-400 text-sm">Type</p>
                <h3 className="text-lg font-semibold">Assembly</h3>
            </div>
        </div>
    </div>
  )
}

export default AttendanceHistory