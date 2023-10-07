import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.jsx'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import 
{ 
  faMagnifyingGlass, 
  faArrowUp, 
  faArrowRightFromBracket, 
  faCompass,
  faIdCard,
  faCalendar,
  faFileCircleCheck,
  faFilePen,
  faBell,
  faCalendarDays,
  faCircle,
  faChevronDown,
  faFile,
  faClock,
  faFaceSmile,
  faUserInjured,
  faUserCheck,
  faUserLargeSlash,
  faCircleCheck,
  faCircleXmark,
  faEye,
  faTrashCan,
  faPenToSquare,
  faPaperclip,
  faSpinner,
  faCheck,
  faXmark,
  faFileLines,
  faAngleDown,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'
library.add( 
  faMagnifyingGlass, 
  faArrowUp, 
  faArrowRightFromBracket, 
  faCompass,
  faIdCard,
  faCalendar,
  faFileCircleCheck,
  faFilePen,
  faBell,
  faCalendarDays,
  faCircle,
  faChevronDown,
  faFile,
  faClock,
  faFaceSmile,
  faUserInjured,
  faUserCheck,
  faUserLargeSlash,
  faCircleCheck,
  faCircleXmark,
  faEye,
  faTrashCan,
  faPenToSquare,
  faPaperclip,
  faSpinner,
  faCheck,
  faXmark,
  faFileLines,
  faAngleDown,
  faArrowLeft)

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
