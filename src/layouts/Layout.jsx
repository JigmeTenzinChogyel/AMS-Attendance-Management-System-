import { Outlet } from "react-router-dom"
import AdminSideNav from "../components/AdminSideNav"
import AdminHeader from "../components/AdminHeader"

function Layout() {

  return (
    <div className="Layout">
        <AdminHeader />
        <div className="flex">
          <AdminSideNav />
          <div  className="p-3 w-4/5 bg-slate-100">
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Layout