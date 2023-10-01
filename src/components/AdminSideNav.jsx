/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function AdminSideNav({ addTitle }) {

  const style = "px-4 my-2 py-2 text-base text-black font-semibold"
  const activeStyle = "px-4 my-2 py-2 text-base text-white font-semibold bg-blue-500 rounded-full"

  //When the user enters in the search bar
  const [ search, setSearch ] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      search != "" && console.log(search)
      setSearch("")
      e.target.blur()
    }
  }

  //toggles the style when the user clicks the search
  const [isSearch, setIsSearch] = useState(false);

  const handleFocus = () => {
    setIsSearch(true);
  };

  const handleBlur = () => {
    setIsSearch(false);
  };

  //function for the user to log out
  const logOut = () => {
    //logout
  }

  return (
    <div className="bg-white mt-24 py-4 w-1/6 flex flex-col gap-36 items-center fixed">
      <nav className="flex flex-col p-3 gap-2 w-3/4 justify-center">
        <NavLink to="." end className={ ({isActive}) => isSelected(isActive, "Dashboard")}>Dashboard</NavLink>
        <NavLink to="student" end className={ ({isActive}) => isSelected(isActive, "Student")}>Student</NavLink>
        <NavLink to="event" end className={ ({isActive}) => isSelected(isActive, "Event")}>Event</NavLink>
        <NavLink to="leave" end className={ ({isActive}) => isSelected(isActive, "Leave")}>Leave</NavLink>
        <NavLink to="attendance" className={ ({isActive}) => isSelected(isActive, "Attendance")}>Attendance</NavLink>
      </nav>
      <button className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Log Out
      </button>
    </div>
  );
}

export default AdminSideNav;
