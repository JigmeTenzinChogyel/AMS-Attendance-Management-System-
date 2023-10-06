import { Outlet } from "react-router-dom"
import AdminSideNav from "../components/AdminSideNav"
import AdminHeader from "../components/AdminHeader"

function Layout() {

  return (
    <div className=" bg-slate-100 h-screen Layout font-Roboto -moz-scrollbars-none ">
        <AdminHeader />
        <div className="flex w-full">
          <AdminSideNav />
          <div className="p-2 mt-20 w-full bg-slate-100 flex justify-end">
            <div className="w-5/6">
              <Outlet/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Layout