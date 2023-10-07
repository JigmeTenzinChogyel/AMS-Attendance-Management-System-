import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Students from "./pages/student/Students"
import Events from "./pages/events/Events"
import Leave from "./pages/leave/Leave"
import AttendanceLayout from "./layouts/AttendanceLayout"
import Dashboard from "./pages/dashboard/Dashboard"
import StudentAttendance from "./pages/attendance/components/Student"
import Report from "./pages/report/Report"
import EventAttendance  from "./pages/attendance/components/Events"
import DashboardAttendance from "./pages/attendance/Dashboard"
import SignIn from "./auth/SignIn"
import SignUp from "./auth/SignUp"
import UserLayout from "./layouts/UserLayout"
import Overview from "./pages/user/Overview"
import UserAttendance from "./pages/user/Attendance"
import UserLeave from "./pages/user/Leave"
import UserReport from "./pages/user/Report"
import TakeAttendance from "./pages/user/TakeAttendance"
import CreateEvent from "./pages/events/components/CreateEvent"
import EventLayout from "./layouts/EventLayout"
import EditEvent from "./pages/events/components/EditEvent"
import StudentLayout from "./layouts/StudentLayout"
import CreateStudent from "./pages/student/components/CreateStudent"
import EditStudent from "./pages/student/components/EditStudent"
import LeaveLayout from "./layouts/LeaveLayout"
import DetailLeave from "./pages/leave/components/DetailLeave"
import Assign from "./pages/assign/Assign"
import Notification from "./pages/notification/Notification"
import AdminProfile from "./pages/admin/AdminProfile"
import UserNotification from "./pages/user/UserNotification"
import UserAttendanceLayout from "./layouts/UserAttendanceLayout"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="user" element={<UserLayout />} >
          <Route index element={ <Overview /> }/>
          <Route path="attendance" element={ <UserAttendanceLayout /> }>
            <Route index element={<UserAttendance />}/>
            <Route path=":id" element={<TakeAttendance />} />
          </Route>
          <Route path="leave" element={ <UserLeave /> }/>
          <Route path="report" element={ <UserReport /> }/>
          <Route path="notification" element={ <UserNotification /> }/>
        </Route>
        <Route path="admin" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="notification" element={<Notification />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="student" element={<StudentLayout />} >
            <Route index element={<Students />}/>
            <Route path="create" element={<CreateStudent />} />
            <Route path=":id" element={<EditStudent />} />
          </Route>
          <Route path="event" element={<EventLayout />} >
            <Route index element={<Events />} />
            <Route path="create" element={<CreateEvent />} />
            <Route path=":id" element={<EditEvent />} />
          </Route>
          <Route path="leave" element={<LeaveLayout />} >
            <Route index element={<Leave />} />
            <Route path=":id" element={<DetailLeave />} />
          </Route>
          <Route path="attendance" element={<AttendanceLayout />}>
            <Route index element={<DashboardAttendance />} />
            <Route path="student" element={<StudentAttendance />} />
            <Route path="event" element={<EventAttendance />} />
          </Route>
          <Route path="assign" element={<Assign />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
