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
import Cookies from 'js-cookie'
import { getToken } from "./api/getToken"


const RoutesDsah = () => {
  const route = useLocation()
  const navigate = useNavigate();
  useEffect(() => {
    const user = Cookies.get('user');
    console.log(user,user == undefined || user == null,'user===')
    if ((user !== undefined && user !== null) && (route.pathname === '/' || route.pathname === '/login' || route.pathname === '/Register')) {
      navigate('/Dashboard');
    } else if ((route.pathname === '/' || user == undefined || user == null) && (route.pathname !== '/Register')) {
      navigate('/login');
    }
  },[route.pathname])
  return (
    <div className="RoutesDsah">
      <Routes>
       
        <Route path="/Dashboard" exact element={<Dashboard />} />
        {/* <Route path="/" exact element={<BasicTable />} /> */}
        <Route path="/Forms " exact element={<Forms />} />
        <Route path="/Cards" exact element={<Cards />} />
        <Route path="/Model" exact element={<Model />} />
        <Route path="/Blank" exact element={<Blank />} />
        <Route path="employee/edit/:Id" exact element={<Edituser/>} />
        <Route path="employee/view/:Id" exact element={<Viewuser/>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Register" exact element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default RoutesDsah
