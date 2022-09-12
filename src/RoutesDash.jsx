import React, { useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import Blank from "./Component/Dashboard/Blank"
import Dashboard from "./Component/Dashboard/Dashboard"
import Forms from "./Component/Dashboard/Forms"
import Model from "./Component/Dashboard/Model"
// import "./RoutesDash.css"
import Edituser from "./Component/user/Edituser"
import Cards from "./Component/Dashboard/Cards"
import Login from "./Component/Login/Login"
import SignUp from "./Component/Login/Signup"
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux"
import { ActionTypes } from "./Component/redux/Contant/action-type"
import Status404 from "./pages/error"


const RoutesDsah = () => {
  const route = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(typeof Cookies.get('user'),'user===')
    const user = Cookies.get('user') !== 'undefined' && Cookies.get('user') !== undefined ? JSON.parse(Cookies.get('user')) : null;
    if ((user !== undefined && user !== null) && (route.pathname === '/' || route.pathname === '/login' || route.pathname === '/Register')) {
      navigate('/Dashboard');
    } else if ((route.pathname === '/' || user === undefined || user === null) && (route.pathname !== '/Register')) {
      navigate('/login');
    }
    if(user !== undefined && user !== null) {
      dispatch({ type: ActionTypes.USER_LOGIN, payload: user})
    }
  },[route.pathname, navigate, dispatch])
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
        <Route path="employee/view/:Id" exact element={<Edituser/>} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Register" exact element={<SignUp />} />
        <Route path="*" element={<Status404 />} />
      </Routes>
    </div>
  )
}

export default RoutesDsah
