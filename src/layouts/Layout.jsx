import { Outlet } from "react-router-dom"
import AdminSideNav from "../components/AdminSideNav"
import AdminHeader from "../components/AdminHeader"

function Layout() {
  return (
    <div className="Layout">
        <AdminHeader />
        <AdminSideNav />
        <Outlet />
    </div>
  )
}

export default Layout