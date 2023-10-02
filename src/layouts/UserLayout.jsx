import { Outlet } from "react-router-dom"
import UserSideNav from "../components/UserSideNav"
import UserHeader from "../components/UserHeader"
import { useState } from "react"

function UserLayout() {
  
  const [ title , setTitle ] = useState("")
  const addTitle = value => {
    setTitle(value)
  }

  return (
    <div className="UserLayout">
        <UserHeader title = { title }/>
        <div className="flex w-full">
          <UserSideNav addTitle = { addTitle }/>
          <div className="p-2 mt-24 w-full bg-slate-100 flex justify-end">
            <div className="w-5/6">
              <Outlet/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserLayout