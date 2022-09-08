import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Grid, selectClasses, Typography } from "@mui/material";
import EditTable from "../user/Edituser";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeEmployees, selectEmployees, setEmployees } from "../redux/Action/EmployeeActions";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Viewuser from "../user/Viewuser";
import { propTypes } from "react-bootstrap/esm/Image";

const BasicTable = () => {
  const {employee} = useSelector((state) => state);
  let emp = employee.employees;
  const dispatch = useDispatch();

  const loadUser=()=>{
    axios
    .get("http://localhost:3008/employee/getAllEmp")
    .then((res) => {
      dispatch(setEmployees(res.data));
      // setState(res.data)
    })
    .catch((err) => {
      console.log(err);
    });

  }

  const deleteUser = (Id)=>{
    axios
    .delete(`http://localhost:3008/employee/delete?empId=${Id}`)
    
    loadUser();
  }

  React.useEffect(() => {
   loadUser();
  }, []);

  return (
    <Grid>
      <Typography align="center" style={{ padding: "25px" }}>
        <Link to="add">Add Employee</Link>
      </Typography>

      <TableContainer component={Paper} sx={{ padding: "20px" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 600 }}>NAME</TableCell>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                EMAIL
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 600 }}>
                {" "}
                DESIGNATION
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 600 }}>
                ROLE NAME
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 600 }}>
                MOBILE
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 600 }}>
                REPOTER
              </TableCell>
              <TableCell align="right" style={{ fontWeight: 600 }}>
                {" "}
                ACTION
              </TableCell>
              {/* <TableCell align="right"></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(emp) &&
              emp.map(
                (
                  {
                    Email,
                    Designation,
                    FullName,
                    ProfileImage,
                    Id,
                    Contact,
                    Reporter,
                    Employee_Id,
                  },
                  i
                ) => (
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
                          <Avatar>{ProfileImage}</Avatar>
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
                            {FullName}
                          </Typography>
                        </Typography>
                      </Grid>
                    </TableCell>
                    <TableCell align="center">{Email}</TableCell>
                    <TableCell align="center">{Designation}</TableCell>
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
                    <TableCell align="right">{Id}</TableCell>
                    <TableCell align="right">{Contact}</TableCell>
                    <TableCell align="right">{Reporter}</TableCell>
                    {/* <TableCell align="right">{Employee.Id}</TableCell> */}
                    <TableCell align="right" style={{ display: "flex" }}>
                      <Link to={`/`}  onClick={()=>deleteUser()} >
                        <DeleteOutlineOutlinedIcon />
                      </Link>
                      <Link to={`/employee/edit/${Id}`} component={<EditTable />}>
                        <BorderColorOutlinedIcon />
                      </Link>
                      <Link
                        to={`/employee/view/${Id}`}
                        component={<Viewuser />}
                      >
                        <RemoveRedEyeOutlinedIcon />
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
export default BasicTable;
