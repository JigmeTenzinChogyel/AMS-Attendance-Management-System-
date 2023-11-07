import { useRef } from "react"
import ReportHead from "../../components/ReportHead"
import { getCurrentDate } from "../../utils/dateFromat"
import { useReactToPrint } from "react-to-print"
import Overview from "./Overview"
import Comparision from "./Comparision"
import Analysis from "./Analysis"


function Report() {

  const componentPDF = useRef()
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Attendance Report",
    // onAfterPrint: () => alert("data saved")
  })

  return (
    <div className="mx-3 px-4 bg-white font-Roboto flex flex-col">
      <div ref={componentPDF} style={{width: "100%"}} className="mx-3 px-4 bg-white font-Roboto">
        <ReportHead />
        <div className="w-full mt-4 p-1 flex flex-col gap-3">
          <h2 className="text-xl font-bold">Weekly Attendance Report</h2>
          <div className="flex gap-1">
            <h2 className="font-bold">Report Date:</h2>
            <h3>{getCurrentDate()}</h3>
          </div>
        </div>
        <Overview />
        <Comparision />
        <Analysis />
        <div className="w-full flex justify-center my-10">
          <h1>Thank You</h1>
        </div>
      </div>
      <button
        onClick={ generatePDF }
        className="py-2 px-4 bg-blue-500 hover:bg-blue-700 active:bg-blue-300 text-white">
        PDF
      </button>
    </div>
  )
}

export default Report