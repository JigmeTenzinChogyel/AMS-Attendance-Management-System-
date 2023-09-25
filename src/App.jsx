import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Students from "./pages/Students"
import Events from "./pages/Events"
import Leave from "./pages/Leave"
import Attendance from "./pages/Attendance"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="student" element={<Students />} />
          <Route path="event" element={<Events />} />
          <Route path="leave" element={<Leave />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
