import { Outlet } from "react-router-dom"
import AdminSideNav from "../components/AdminSideNav"
import AdminHeader from "../components/AdminHeader"

function Layout() {

  return (
    <div className="Layout">
        <AdminHeader />
        <div className="flex">
          <AdminSideNav />
          <div className="p-3 w-5/6 bg-slate-100 flex">
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Layout