import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBankDetails,
  selectBondDetails,
  selectEmployees,
  selectSalaryDetails,
} from "../redux/Action/EmployeeActions";

const Viewuser = () => {
  const {employee} = useSelector((state) => state);
  let empEmployee = employee?.selectedEployee ?? {};
  let empBanks = employee?.employeeBankDetail ?? {};
  let salary = employee?.employeeSalary ?? {};
  let bondDetails = employee?.employeeBond ?? {};
  
  const dispatch = useDispatch();
  
  const { Id } = useParams();
  const { IsBond='', Duration='', StartDate='', EndDate='' } = bondDetails;
  const {
    Email="",
    FullName='',
    Address='',
    Probation_Period='',
    Joining_Date='',
    DOB='',
    Contact='',
    Designation='',
  } = empEmployee;
  const { Account_number, IFSC_Code, BankName, Branch } = empBanks;
  const {
    Basic_Salary='',
    PF='',
    PT='',
    Other_Deduction='',
    HRA='',
    ESI='',
    Monthly='',
    Special_Allowance='',
    Bonus='',
    Performance_Allowance='',
  } = salary;
  
  React.useEffect(() => {
    axios
    .get(`http://localhost:3008/employee/allEmpDetails?Id=${Id}`)
    .then((res) => {
      const data = res.data.data[0]
      dispatch(selectEmployees(data));
      dispatch(selectBankDetails(data.banks[0]));
      dispatch(selectBondDetails(data.bonds[0]));
      dispatch(selectSalaryDetails(data.salaries[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container
        component="main"
        maxWidth="full"
        style={{ backgroundColor: "rgba(229, 231, 235)" }}
      >
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // border: "1px solid black",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Details
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2} style={{ padding: "40px" }}>
              <Grid xs={12} md={12}>
                <h4>Persnol Details:-</h4>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  value={FullName}
                  // defaultValue={FullName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="designation"
                  label="Designation"
                  name="designation"
                  value={Designation}
                  autoFocus
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  name="Email"
                  value={Email}
                  autoFocus
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact"
                  name="contact"
                  value={Contact}
                  autoFocus
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  label="Date Of Birth"
                  name="dob"
                  value={DOB}
                  autoFocus
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  fullWidth
                  name="joinningDate"
                  label="Joinning Date"
                  id="joinningDate"
                  value={Joining_Date}
                  autoFocus
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  fullWidth
                  name="probationPeriod"
                  label="Probation Period"
                  id="probationPeriod"
                  value={Probation_Period}
                  autoFocus
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  value={Address}
                  autoFocus
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ padding: "40px" }}>
              <Grid xs={12} md={12}>
                <h4>Bank Details:-</h4>
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  autoComplete="given-name"
                  name="bankName"
                  required
                  fullWidth
                  id="bankName"
                  label="BankName"
                  value={BankName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="accountNumber"
                  label="Account Number"
                  name="accountNumber"
                  value={Account_number}
                  autoFocus
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="ifsc"
                  label="IFSC code"
                  name="ifsc"
                  value={IFSC_Code}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="branch"
                  label="Branch"
                  name="branch"
                  value={Branch}
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ padding: "40px" }}>
              <Grid xs={12} md={12}>
                <h4>Bond Details:-</h4>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  autoComplete="given-name"
                  name="bond"
                  required
                  fullWidth
                  id="bond"
                  label="Bond"
                  value={IsBond}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="startDate"
                  label="Start Day "
                  name="startDate"
                  value={StartDate}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="endDate"
                  label="End Day"
                  name="endDate"
                  value={EndDate}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="duration"
                  label="Duration"
                  name="duration"
                  value={Duration}
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ padding: "40px" }}>
              <Grid xs={12} md={12}>
                <h4>Salary Details:-</h4>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  autoComplete="given-name"
                  name="basicSalary"
                  required
                  fullWidth
                  id="basicSalary"
                  label="Basic Salary"
                  value={Basic_Salary}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="hra"
                  label="HRA "
                  name="hra"
                  value={HRA}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="bonus"
                  label="Bonus"
                  name="bonus"
                  value={Bonus}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="performanceAllowance"
                  label="Performance Allowance"
                  name="performanceAllowance"
                  autoComplete="family-name"
                  value={Performance_Allowance}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="specialAllowance"
                  label="Special Allowance"
                  name="specialAllowance"
                  value={Special_Allowance}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="pf"
                  label="PF"
                  name="pf"
                  value={PF}
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="esi"
                  label="ESI"
                  name="esi"
                  value={ESI}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="pt"
                  label="PT"
                  name="pt"
                  value={PT}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="otherDeduction"
                  label="Other Deduction"
                  name="otherDeduction"
                  value={Other_Deduction}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="monthly"
                  label="Monthly"
                  name="monthly"
                  value={Monthly}
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Viewuser;
