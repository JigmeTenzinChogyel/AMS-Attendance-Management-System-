import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faArrowUp } from '@fortawesome/free-solid-svg-icons'
library.add( faMagnifyingGlass, faArrowUp )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
