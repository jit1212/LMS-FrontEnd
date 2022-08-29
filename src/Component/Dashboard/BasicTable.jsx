import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Avatar, Grid, selectClasses, Typography } from "@mui/material"
import EditTable from "./EditTable"
import { Link } from "react-router-dom"
import { NavLink } from "react-bootstrap"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { selectEmployees, setEmployees } from "../redux/Action/EmployeeActions"

const User = [
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",
    img: "https://mui.com/static/images/avatar/2.jpg",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",
    img: "https://mui.com/static/images/avatar/2.jpg",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",
    img: "https://mui.com/static/images/avatar/2.jpg",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",
    img: "https://mui.com/static/images/avatar/2.jpg",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",
    img: "https://mui.com/static/images/avatar/2.jpg",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
  {
    id: 1,
    name: "Jitendra",
    Email: "Jitendra@gmail.com",

    Dig: "Software Engineer",
    Status: "Active",
    Role: "Owner",
    Edit: "Edit",
  },
]

const BasicTable = () => {
  // const [state,setState] = React.useState()
  const employees = useSelector((state)=>state)
  let emp = employees.allEmployees.employees
  const dispatch = useDispatch()

  //

  React.useEffect(() => {
    axios
      .get("http://localhost:3008/employee/getAllEmp")
      .then((res) => {
        dispatch(setEmployees(res.data))
        // setState(res.data)

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(emp)
  // console.log(state);
  // console.log(state);


  return (
    <TableContainer component={Paper} sx={{ padding: "20px" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="center">TITLE</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">ROLE</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray( emp) &&
          emp.map((Employee, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{ display: "flex" }}
                >
                  <Grid
                    component="span"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",

                      alignItems: "center",
                    }}
                  >
                    <Typography component="span">
                      <Avatar>{Employee.ProfileImage}</Avatar>
                    </Typography>
                    <Typography
                      component="span"
                      style={{ paddingLeft: "15px" }}
                    >
                      <Typography
                        component="span"
                        style={{
                          display: "flex",
                          fontWeight: "bold",
                        }}
                      >
                        {Employee.FullName}
                      </Typography>
                      <Typography component="span">{Employee.Email}</Typography>
                    </Typography>
                  </Grid>
                </TableCell>
                <TableCell align="center">{Employee.Designation}</TableCell>
                <TableCell align="right">
                  <Typography
                    component="span"
                    style={{
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      color: "rgba(6,95,70)",
                      backgroundColor: "#b0e0e6",
                      borderRadius: "8px",
                      padding: "2px 10px",
                      display: "inline-block",
                    }}
                  >
                    {Employee.Status}
                  </Typography>
                </TableCell>
                <TableCell align="right">{Employee.Id}</TableCell>
                <TableCell align="right">
                  <Typography
                    component="span"
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    <Link to="/edit">{Employee.Edit}</Link>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default BasicTable
