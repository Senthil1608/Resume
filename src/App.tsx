import './App.css'
import React from 'react'
import NavBar from './components/layout/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import ResumeEditor from './routes/ResumeEditor'
import Dashboard from './routes/Dashboard'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Editor" element={<ResumeEditor />} />
      </Routes> 
    </>
  )
}

export default App
