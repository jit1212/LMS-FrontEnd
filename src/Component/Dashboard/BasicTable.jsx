import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Avatar, Grid, selectClasses, Typography } from "@mui/material"
import EditTable from "../user/Edituser"
import { Link } from "react-router-dom"
import { NavLink } from "react-bootstrap"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { selectEmployees, setEmployees } from "../redux/Action/EmployeeActions"
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Viewuser from "../user/Viewuser"
import { propTypes } from "react-bootstrap/esm/Image"

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
<Grid>
  <Typography align="center" style={{padding:"25px"}}  >
    <Link to="add" >Add Employee</Link>
  </Typography>

<TableContainer component={Paper} sx={{ padding: "20px" }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell  style={{fontWeight:600}}>NAME</TableCell>
            <TableCell align="center" style={{fontWeight:600}}>EMAIL</TableCell>
            <TableCell align="center"style={{fontWeight:600}}> DESIGNATION</TableCell>
            <TableCell align="right"style={{fontWeight:600}}>ROLE NAME</TableCell>
            <TableCell align="right"style={{fontWeight:600}}>MOBILE</TableCell>
            <TableCell align="right"style={{fontWeight:600}}>REPOTER</TableCell>
            <TableCell align="right"style={{fontWeight:600}}> ACTION</TableCell>
            {/* <TableCell align="right"></TableCell> */}
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
                    </Typography>
                  </Grid>
                </TableCell>
                <TableCell align="center">{Employee.Email}</TableCell>
                <TableCell align="center">{Employee.Designation}</TableCell>
                {/* <TableCell align="right">
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
                  pending
                  </Typography>
                </TableCell> */}
                <TableCell align="right">{Employee.Id}</TableCell>
                <TableCell align="right">{Employee.Contact}</TableCell>
                <TableCell align="right">{Employee.Reporter}</TableCell>
                {/* <TableCell align="right">{Employee.Id}</TableCell> */}
                <TableCell align="right"
                style={{display:"flex"}}
                >
                  <Typography><DeleteOutlineOutlinedIcon/></Typography>
                  <Link to={`edit/${Employee.Employee_Id}`} component={<EditTable/>}><BorderColorOutlinedIcon/></Link>
                  <Link to={`/employee/view/${Employee.Id}`}  component={
                  <Viewuser data={Employee.Id}/>}><RemoveRedEyeOutlinedIcon/></Link>
                  
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Grid>
  )
}
export default BasicTable
