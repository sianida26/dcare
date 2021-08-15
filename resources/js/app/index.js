import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import AuthProvider, {useAuth} from './providers/AuthProvider'

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-calendar/dist/Calendar.css';
import "react-datepicker/dist/react-datepicker.css"

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);