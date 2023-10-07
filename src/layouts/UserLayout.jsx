import { Outlet } from "react-router-dom"
import UserNav from "../components/UserNav"

function UserLayout() {

  return (
    <div className="font-Roboto">
      <UserNav />
      <div className="mt-24 flex w-full justify-center">
        <Outlet/>
      </div>
    </div>
  )
}

export default UserLayout