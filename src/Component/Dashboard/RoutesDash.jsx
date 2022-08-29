import React from "react"
import { Routes, Route } from "react-router-dom"
import BasicTable from "./BasicTable"
import Blank from "./Blank"
import Cards from "./Cards"
import Dashboard from "./Dashboard"
import EditTable from "./EditTable"
import Element from "./Element"
import Forms from "./Forms"
import Model from "./Model"
import "./RoutesDash.css"

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
        <Route path="/edit" element={<EditTable />} />
      </Routes>
    </div>
  )
}

export default RoutesDsah
