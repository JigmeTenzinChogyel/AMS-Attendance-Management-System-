/* eslint-disable react/prop-types */
import logo from  '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'

function AdminHeader() {

  // Sets the Title of the page to the current path
  const location = useLocation()
  const { pathname  } = location
  let title = "Dashboard"
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
  }
  
  return (
    <div className='py-4 w-full px-10 flex items-center fixed top-0 bg-white z-10'>
        <div className=''>
            <img src={logo} className='w-24 h-16'/>
        </div>
        <div className='ml-40'>
            <h1 className='pl-5 text-3xl font-semibold flex items-center'>{ icon }{ title }</h1>
        </div>
        <div className='w-full flex justify-end items-center gap-8'>
          <div className='cursor-pointer'>
            <FontAwesomeIcon icon="fa-solid fa-bell" className='text-2xl text-blue-600'/>
            <FontAwesomeIcon icon="fa-solid fa-circle" className='text-xs absolute text-red-500 -mt-1 -ml-3'/>
          </div>
          <span className='flex gap-1 items-center '>
            <h3 className='text-2xl font-semibold text-blue-700'>Hello!</h3>
            <h3 className='text-xl font-normal cursor-pointer'>Admin</h3>
          </span>
        </div>
    </div>
  )
}

export default AdminHeader