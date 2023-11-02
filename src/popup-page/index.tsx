import React from 'react'
import ReactDOM from 'react-dom/client'
import PopupApp from './PopupApp'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div style={{width: "800px", height: "600px"}}>
            <PopupApp />
        </div>
    </React.StrictMode>,
)