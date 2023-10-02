import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Students from "./pages/student/Students"
import Events from "./pages/events/Events"
import Leave from "./pages/leave/Leave"
import Attendance from "./pages/attendance/Attendance"
import Dashboard from "./pages/dashboard/Dashboard"
import StudentAttendance from "./pages/attendance/components/Student"
import Report from "./pages/attendance/components/Report"
import EventAttendance  from "./pages/attendance/components/Events"
import DashboardAttendance from "./pages/attendance/components/Dashboard"
import SignIn from "./auth/SignIn"
import SignUp from "./auth/SignUp"
import UserLayout from "./layouts/UserLayout"
import Overview from "./pages/user/Overview"
import UserAttendance from "./pages/user/Attendance"
import UserLeave from "./pages/user/Leave"
import UserReport from "./pages/user/Report"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="user" element={<UserLayout />} >
          <Route index element={ <Overview /> }/>
          <Route path="attendance" element={ <UserAttendance /> }/>
          <Route path="leave" element={ <UserLeave /> }/>
          <Route path="report" element={ <UserReport /> }/>
        </Route>
        <Route path="admin" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="student" element={<Students />} />
          <Route path="event" element={<Events />} />
          <Route path="leave" element={<Leave />} />
          <Route path="attendance" element={<Attendance />}>
            <Route index element={<DashboardAttendance />} />
            <Route path="student" element={<StudentAttendance />} />
            <Route path="event" element={<EventAttendance />} />
            <Route path="report" element={<Report />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
