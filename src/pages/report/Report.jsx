import { useRef } from "react"
import ReportHead from "../../components/ReportHead"
import { getCurrentDate } from "../../utils/dateFromat"
import { useReactToPrint } from "react-to-print"


function Report() {

  const componentPDF = useRef()
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Attendance Report",
    // onAfterPrint: () => alert("data saved")
  })

  return (
    <div className="m-3 p-4 bg-white font-Roboto flex flex-col">
      <div ref={componentPDF} style={{width: "100%"}} className="m-3 px-4 bg-white font-Roboto flex flex-col justify-center items-center">
        <ReportHead />
        <div className="flex gap-1 w-full mt-4 p-1">
          <h2 className="font-bold">Report Date:</h2>
          <h3>{getCurrentDate()}</h3>
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