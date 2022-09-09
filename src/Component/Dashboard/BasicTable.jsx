import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Grid, Typography } from "@mui/material";
import EditTable from "../user/Edituser";
import { Link } from "react-router-dom";
import axios from "axios";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Viewuser from "../user/Viewuser";

const BasicTable = () => {
  const [employee, setEmployee] = React.useState();

  const loadUser = () => {
    axios
      .get("http://localhost:3008/employee/getAllEmp")
      .then((res) => {
        setEmployee(res.data);
        console.log(employee);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(employee) &&
              employee.map(
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
                    <TableCell align="right">{Id}</TableCell>
                    <TableCell align="right">{Contact}</TableCell>
                    <TableCell align="right">{Reporter}</TableCell>
                    {/* <TableCell align="right">{Employee.Id}</TableCell> */}
                    <TableCell align="right" style={{ display: "flex" }}>
                      <Link to={`/`}>
                        <DeleteOutlineOutlinedIcon />
                      </Link>
                      <Link
                        to={`/employee/edit/${Id}`}
                        component={<EditTable />}
                      >
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
