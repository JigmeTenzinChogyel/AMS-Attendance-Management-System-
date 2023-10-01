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
    <div className='w-full grid grid-cols-6 fixed top-0 bg-white z-10 pt-4'>
        <div className='col-span-1 flex pl-6 justify-start items-center'>
            <img src={logo} className='w-20 h-20'/>
        </div>
        <div className='col-span-1 flex justify-start items-center'>
            <h1 className='pl-5 text-3xl font-semibold flex items-center'>{ icon }{ title }</h1>
        </div>
        <div className='col-span-4 w-full flex justify-end items-center gap-8 pr-6'>
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