import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '97vh', background: '#0062cc'
    }}>
      <App
        className={'form-floating mb-3'}
        inputprops={{
          style: {
            width: '300px'
          },
          className: 'form-control',
          placeholder: "Select Nepali Date"
        }} >
        <label>Pick Nepali Date</label>
      </App>
    </div>
  </React.StrictMode>,
)
