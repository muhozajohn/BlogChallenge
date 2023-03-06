import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Blog from './pages/Blog'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Single from './pages/Single'
import DashBord from './components/DashBord/DashBord'
import Manage from './components/DashBord/Manage'
import CreateNewblog from './components/DashBord/CreateNewblog'
import CreateNewuser from './components/DashBord/CreateNewuser'
import Logout from './components/DashBord/Logout'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Single" element={<Single />} />
        <Route path="/DashBoard" element={<DashBord />} />
        <Route path="/Manage" element={<Manage />} />
        <Route path="/Create" element={<CreateNewblog />} />
        <Route path="/CreateNewuser" element={<CreateNewuser />} />
        <Route path="/logout" element={<Logout />} />
    
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App