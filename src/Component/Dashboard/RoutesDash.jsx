import React from "react"
import { Routes, Route } from "react-router-dom"
import BasicTable from "./BasicTable"
import Blank from "./Blank"
import Cards from "./Cards"
import Dashboard from "./Dashboard"
import EditTable from "../user/Edituser"
import Element from "./Element"
import Forms from "./Forms"
import Model from "./Model"
import "./RoutesDash.css"
import Edituser from "../user/Edituser"
import Viewuser from "../user/Viewuser"

const RoutesDsah = () => {
  return (
    <div className="RoutesDsah">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Employee" element={<BasicTable />} />
        <Route path="/Forms " element={<Forms />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Model" element={<Model />} />
        <Route path="/Blank" element={<Blank />} />
        {/* <Route path="employee/edit/:id" element={<Edituser/>} /> */}
        <Route path="employee/view/:id" element={<Viewuser/>} />
        {/* <Route path="employee/add" element={<Viewuser/>} /> */}
      </Routes>
    </div>
  )
}

export default RoutesDsah
