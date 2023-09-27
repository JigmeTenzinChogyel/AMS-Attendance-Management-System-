import { Outlet } from "react-router-dom"
import AdminSideNav from "../components/AdminSideNav"
import AdminHeader from "../components/AdminHeader"
import { useState } from "react"

function Layout() {
  
  const [ title , setTitle ] = useState("")
  const addTitle = value => {
    setTitle(value)
  }

  return (
    <div className="Layout">
        <AdminHeader title = { title }/>
        <div className="flex w-full">
          <AdminSideNav addTitle = { addTitle }/>
          <div className="p-2 mt-24 w-full bg-slate-100 flex justify-end">
            <div className="w-5/6">
              <Outlet/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Layout