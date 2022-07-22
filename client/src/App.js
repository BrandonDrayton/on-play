import * as React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import PrimaryNav from './components/PrimaryNav'
import Register from './routes/Register'
import Login from './routes/Login'
import Dashboard from './routes/Dashboard'
import Logout from './routes/Logout'
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      <PrimaryNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  )
}

export default App
