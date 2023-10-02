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
import UserProfile from "./pages/user/userprofile"
import UserDetails from "./pages/user/userdetails"
import ApplyLeave from "./pages/user/applyLeave"
import UserLayout from "./layouts/UserLayout"


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
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
        <Route path="user" element={<UserLayout />} >
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="userdetails"  element={<UserDetails />} />
          <Route path="ApplyLeave" element={<ApplyLeave />} />

        </Route>
      </Routes>
    </Router>
  )
}

export default App
