import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBankDetails,
  selectBondDetails,
  selectEmployees,
  selectSalaryDetails,
} from "../redux/Action/EmployeeActions";

const Edituser = () => {
  const employee = useSelector((state) => state);
  let empEmployee = employee.selectedEmployees;
  let empBanks = employee.bankDetailsEmployee;
  let salary = employee.salaryDetailsEmployee;
  let bondDetails = employee.bondDetailsEmployee;
  const dispatch = useDispatch();

  const { Id } = useParams();
  // const { IsBond, Duration, StartDate, EndDate } = bondDetails;
  // const {
    
  //   Email,
  //   FullName,
  //   Address,
  //   Probation_Period,
  //   Joining_Date,
  //   DOB,
  //   Contact,
  //   Designation,
  // } = empEmployee;
  // const { Account_number, IFSC_Code, BankName, Branch } = empBanks;
  // const {
  //   Basic_Salary,
  //   PF,
  //   PT,
  //   Other_Deduction,
  //   HRA,
  //   ESI,
  //   Monthly,
  //   Special_Allowance,
  //   Bonus,
  //   Performance_Allowance,
  // } = salary;

  const handleChange=(e)=>{
    let {name,value}=e.target
    dispatch(selectEmployees({...empEmployee,[name]:value}))
    console.log(empEmployee);
    
    dispatch(selectBankDetails({...empBanks,[name]:value}))
    dispatch(selectBondDetails({...bondDetails,[name]:value}))
    dispatch(selectSalaryDetails({...salary,[name]:value}))
  }

  const handleSubmit = (e)=>{
    console.log(empEmployee);
    e.preventDefault();
    axios.put(`http://localhost:3008/employee/update`,empEmployee)
    .then((response)=>{
      dispatch(selectEmployees(response.data.data[0]))
    })
    .catch((err)=>console.log(err))
    console.log(empEmployee);

  }

  React.useEffect(() => {
    axios
      .get(`http://localhost:3008/employee/allEmpDetails?Id=${Id}`)
      .then((res) => {
        // dispatch(selectEmployees(res.data.data[0]));
        // dispatch(selectBankDetails(res.data.data[0].banks[0]));
        // dispatch(selectBondDetails(res.data.data[0].bonds[0]));
        // dispatch(selectSalaryDetails(res.data.data[0].salaries[0]));
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
          <Box  noValidate sx={{ mt: 3 }}>
            <form onSubmit={handleSubmit} >
            <Grid container spacing={2} style={{ padding: "40px" }}>
              <Grid xs={12} md={12}>
                <h4>Persnol Details:-</h4>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  autoComplete="given-name"
                  name="FullName"
                  required
                  fullWidth
                  id="FullName"
                  label="FullName"
                  // value={FullName}
                  // onChange={(e)=>handleChange(e)}
                  // defaultValue={FullName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Designation"
                  label="Designation"
                  name="Designation"
                  // value={Designation}
                  // onChange={(e)=>handleChange(e)}
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
                  // value={Email}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Contact"
                  label="Contact"
                  name="Contact"
                  // value={Contact}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  fullWidth
                  id="DOB"
                  label="Date Of Birth"
                  name="DOB"
                  // value={DOB}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  fullWidth
                  name="Joining_Date"
                  label="Joinning Date"
                  id="Joining_Date"
                  // value={Joining_Date}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  fullWidth
                  name="Probation_Period"
                  label="ProbationPeriod"
                  id="Probation_Period"
                  // value={Probation_Period}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  id="Address"
                  // value={Address}
                  // onChange={(e)=>handleChange(e)}
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
                  name="BankName"
                  required
                  fullWidth
                  id="BankName"
                  label="BankName"
                  // value={BankName}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Account_number"
                  label="Account Number"
                  name="Account_number"
                  // value={Account_number}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="IFSC_Code"
                  label="IFSC code"
                  name="IFSC_Code"
                  // value={IFSC_Code}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Branch"
                  label="Branch"
                  name="Branch"
                  // value={Branch}
                  // onChange={(e)=>handleChange(e)}
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
                  name="IsBond"
                  required
                  fullWidth
                  id="IsBond"
                  label="Bond"
                  // value={IsBond}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="StartDate"
                  label="Start Day "
                  name="StartDate"
                  // value={StartDate}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="EndDate"
                  label="End Day"
                  name="EndDate"
                  // value={EndDate}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Duration"
                  label="Duration"
                  name="Duration"
                  // value={Duration}
                  // onChange={(e)=>handleChange(e)}
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
                  name="Basic_Salary"
                  required
                  fullWidth
                  id="Basic_Salary"
                  label="Basic Salary"
                  // value={Basic_Salary}
                  // onChange={(e)=>handleChange(e)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="HRA"
                  label="HRA "
                  name="HRA"
                  // value={HRA}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Bonus"
                  label="Bonus"
                  name="Bonus"
                  // value={Bonus}
                  // onChange={(e)=>handleChange(e)}

                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Performance_Allowance"
                  label="Performance Allowance"
                  name="Performance_Allowance"
                  autoComplete="family-name"
                  // value={Performance_Allowance}
                  // onChange={(e)=>handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Special_Allowance"
                  label="Special Allowance"
                  name="Special_Allowance"
                  // value={Special_Allowance}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="PF"
                  label="PF"
                  name="PF"
                  // value={PF}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="ESI"
                  label="ESI"
                  name="ESI"
                  // value={ESI}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="PT"
                  label="PT"
                  name="PT"
                  // value={PT}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Other_Deduction"
                  label="Other Deduction"
                  name="Other_Deduction"
                  // value={Other_Deduction}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  id="Monthly"
                  label="Monthly"
                  name="Monthly"
                  // value={Monthly}
                  // onChange={(e)=>handleChange(e)}
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <Grid display="flex" justifyContent="flex-end" >
              <Typography padding="15px"><button type="submit" >save</button> </Typography>
              <Typography padding="15px"><button>cancle</button></Typography>
            </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Edituser;
