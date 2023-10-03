import { Outlet } from "react-router-dom"

function EventLayout() {

  return (
    <div className="m-3 py-12 bg-white font-Roboto flex justify-center items-center">
        <Outlet/>
    </div>
  )
}

export default EventLayout