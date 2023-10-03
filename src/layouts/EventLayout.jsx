import { Outlet } from "react-router-dom"

function EventLayout() {

  return (
    <div className="m-5 bg-white">
        <Outlet/>
    </div>
  )
}

export default EventLayout