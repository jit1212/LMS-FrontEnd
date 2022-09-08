import React, { useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import Blank from "./Component/Dashboard/Blank"
import Dashboard from "./Component/Dashboard/Dashboard"
import Forms from "./Component/Dashboard/Forms"
import Model from "./Component/Dashboard/Model"
// import "./RoutesDash.css"
import Edituser from "./Component/user/Edituser"
import Viewuser from "./Component/user/Viewuser"
import Cards from "./Component/Dashboard/Cards"
import Login from "./Component/Login/Login"
import SignUp from "./Component/Login/Signup"
import { useCookies } from 'react-cookie';

const RoutesDsah = () => {
  const route = useLocation()
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  useEffect(() => {
    const user = cookies.user;
    console.log(user,user == undefined || user == null,'user===')
    if((route.pathname === '/' && (user == undefined || user == null)) && (route.pathname !== '/Resister')) {
      navigate('/login');
    }
    if((route.pathname === '/' && user)) {
      navigate('/Dashboard');
    }
  },[route.pathname])
  return (
    <div className="RoutesDsah">
      <Routes>
       
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/" element={<BasicTable />} /> */}
        <Route path="/Forms " element={<Forms />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Model" element={<Model />} />
        <Route path="/Blank" element={<Blank />} />
        <Route path="employee/edit/:Id" element={<Edituser/>} />
        <Route path="employee/view/:Id" element={<Viewuser/>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Resister" exact element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default RoutesDsah
