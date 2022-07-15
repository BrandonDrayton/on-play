import * as React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import PrimaryNav from './components/PrimaryNav'
import Register from './routes/Register'
import Login from './routes/Login'

function App() {
  return (
    <div className="App">
      <PrimaryNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
