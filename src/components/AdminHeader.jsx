/* eslint-disable react/prop-types */
import logo from  '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function AdminHeader() {

  // Sets the Title of the page to the current path
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname  } = location
  let title = "Overview"
  let icon = <FontAwesomeIcon icon="fa-solid fa-compass" className="text-blue-600 mr-3"/>
  
  if (pathname.includes("/admin/student")) {
    title = "Student"
    icon = <FontAwesomeIcon icon="fa-solid fa-id-card" className=" text-blue-600 mr-3"/>
  } else if (pathname.includes("/admin/event")) {
    title = "Event"
    icon = <FontAwesomeIcon icon="fa-solid fa-calendar" className=" text-blue-600 mr-3"/>
  } else if (pathname.includes("/admin/leave")) {
    title = "Leave"
    icon = <FontAwesomeIcon icon="fa-solid fa-file-circle-check" className="text-blue-600 mr-3"/>
  } else if (pathname.includes("/admin/attendance")) {
    title = "Attendance"
    icon = <FontAwesomeIcon icon="fa-solid fa-file-pen" className="text-blue-600 mr-3"/>
  } else if (pathname.includes("/admin/report")) {
    title = "Report"
    icon = <FontAwesomeIcon icon="fa-solid fa-file-lines" className="text-blue-600 mr-3"/>
  }
  
  return (
    <div className='w-full grid grid-cols-6 fixed top-0 z-10 py-2 bg-white'>
        <div className='col-span-1 flex pl-6 justify-start items-center'>
            <img src={logo} className='w-16 h-16'/>
        </div>
        <div className='col-span-1'>
            <h1 className='pl-5 mt-4 text-3xl font-semibold flex items-center'>{ icon }{ title }</h1>
        </div>
        <div className='col-span-4 w-full flex justify-end items-center gap-8 pr-6'>
          <div 
          className='cursor-pointer'
          onClick={() => navigate("notification")}>
            <FontAwesomeIcon icon="fa-solid fa-bell" className='text-2xl text-blue-600'/>
            <FontAwesomeIcon icon="fa-solid fa-circle" className='text-xs absolute text-red-500 -mt-1 -ml-3'/>
          </div>
          <div className='flex items-center gap-5 cursor-pointer' onClick={() => navigate("profile")}>
            <h3 className='text-lg font-normal'>Jigme Tenzin Chogyel</h3>
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          </div>
        </div>
    </div>
  )
}

export default AdminHeader