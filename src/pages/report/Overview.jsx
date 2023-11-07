import { getCurrentDate } from "../../utils/dateFromat"

function Overview() {

    const date = getCurrentDate()
    
    let text = `This is the Weekly Attendance Report for College of Science and Technology. This report provides a detailed analysis of attendance data for the week ending ${date}. It offers valuable insights into the attendance patterns of students, highlights trends, and identifies areas for improvement. The data presented here is generated and managed by our MIS software to help our college make informed decisions regarding attendance management and performance enhancement.`
    
    return (
    <div className="p-3 flex flex-col gap-3">
        <h2 className="text-lg font-semibold">1. Overview</h2>
        <p>{text}</p>
        <div>
            <div className="flex gap-2">
                <h3 className="font-semibold text-slate-500">Total Events: </h3>
                <p>2</p>
            </div>
            <div className="flex gap-2">
                <h3 className="font-semibold text-slate-500">Expected Students: </h3>
                <p>2</p>
            </div>
            <div className="flex gap-2">
                <h3 className="font-semibold text-slate-500">Total Presents: </h3>
                <p>2</p>
            </div>
            <div className="flex gap-2">
                <h3 className="font-semibold text-slate-500">Total Absents: </h3>
                <p>2</p>
            </div>
            <div className="flex gap-2">
                <h3 className="font-semibold text-slate-500">Total Leaves: </h3>
                <p>2</p>
            </div>
        </div>
    </div>
  )
}

export default Overview