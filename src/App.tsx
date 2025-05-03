import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import ResumeEditor from './routes/ResumeEditor'
import Dashboard from './routes/Dashboard'
import AllProjects from './routes/AllProjects'
import LoginPage from './routes/LoginPage'
import { BrowserRouter } from 'react-router-dom'
import RegisterPage from './routes/RegisterPage'

function App() {


  return (
    <>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element ={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
         <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="/Dashboard/AllProjects" element={<AllProjects />}/>
        </Route>
        <Route path="/Editor" element={<ResumeEditor />} />
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
