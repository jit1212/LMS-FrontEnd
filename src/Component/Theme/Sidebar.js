import React, { useState } from "react"
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import "./sidebar.css"
import { Link, useParams } from "react-router-dom"
import { NavLink } from "react-bootstrap"
const Data = [
  {
    name: "Home",
    
    
    path: <CheckBoxOutlineBlankIcon style={{ width: "20px" }} />,
  },
  {
    name: "Dashboard",
    path: <DashboardOutlinedIcon style={{ width: "20px" }} />,
  },
  {
    name: "Element",
    path: <TableRestaurantOutlinedIcon style={{ width: "20px" }} />,
  },
  {
    name: "Forms",
    path: <TableRestaurantOutlinedIcon style={{ width: "20px" }} />,
  },
  {
    name: "Cards",
    path: <PaymentOutlinedIcon style={{ width: "20px" }} />,
  },
  {
    name: "Model",
    path: <TableRestaurantOutlinedIcon style={{ width: "20px" }} />,
  },
  {
    name: "Blank",
    path: <CheckBoxOutlineBlankIcon style={{ width: "20px" }} />,
  },
 
]

const Sidebar = (props) => {
  const [state, setState] = useState({
    activeObject: Data[0],
    Data,
  })
  const ToggleActive = (i) => {
    setState({ ...state, activeObject: state.Data[i] })
  }
  const toggleActiveStyle = (i) => {
    if (state.Data[i] === state.activeObject) {
      return "box active"
    } else return "box inactive"
  }
  return (
    <div className="sidebar">
      {props.data}

      <div className="logo d-flex">
        <h5>V-DashBoard</h5>
      </div>

      {Data.map((u, id) => {
        return (
          /* color: rgba(107, 114, 128); */
          <ul
            key={id}
            className={toggleActiveStyle(id)}
            onClick={() => ToggleActive(id)}
          >
            <ul className="Linkdeco" to={u.name}>
              {/* <Link to={u.name}> */}
              <li>
                <span className="icons ">{u.path}</span>
                <span className="iconName  ">{u.name}</span>
              </li>

              {/* </Link> */}
            </ul>
          </ul>
        )
      })}
    </div>
  )
}

export default Sidebar
