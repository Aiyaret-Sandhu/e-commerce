import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/deploy/",
    element: <App/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider router={router} store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
