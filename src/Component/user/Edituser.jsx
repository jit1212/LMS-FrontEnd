import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useParams } from "react-router-dom";
import { getSingleEmployee, updateEmployee } from "../../api/employee";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

const steps = [
  'Personal Details',
  'Bank Details',
  'Bond Details',
  'Salary Details'
];

const Edituser = () => {
  const [personalDetails,setPersonalDetails] = useState()
  const [bankDetails,setBankDetails] = useState()
  const [salaryDetails,setSalaryDetails] = useState()
  const [bondDetails,setBondDetails] = useState()
  const [employee, setEmployee] = React.useState({
    Email: "",
    FullName: "",
    Address: "",
    Probation_Period: "",
    Joining_Date: "",
    DOB: "",
    Contact: "",
    Designation: "",
  });
  const [stepNum, setStepNum]=useState(0)
  const [ editeFlag, setEditFlag ] = React.useState(false)

  const { Id } = useParams();
  const location = useLocation();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // const handleBankChange = (e) => {
  //   let {name}

  // }
  
  const handleSubmit = async (e) => {
    let item = {
      Email:"",
      FullName:""
    }
    
    e.preventDefault();
    const json = await updateEmployee(Id,item)
    console.log(json);
  };

  React.useEffect(() => {
    if(location.pathname.includes('edit')) {
      setEditFlag(true)
    } else if(location.pathname.includes('view')) {
      setEditFlag(false)
    }
    async function init() {
      const data = await getSingleEmployee(Id);
      if (data[0]) {
        const empData = data[0]
        setEmployee(() => (empData.personalDetails[0]));
        setSalaryDetails(() => empData.salaries[0])
        setBankDetails(() => empData.banks[0])
        setBondDetails(() => empData.bonds[0])
      }
    }
    init();
  },[]);

  return (
    <>
      <Container
        component="main"
        maxWidth="full"
        style={{ backgroundColor: "rgba(229, 231, 235)", padding: "50px 24px", minHeight: '100vh' }}
      >
        <CssBaseline />
        <Box
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Details
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={stepNum} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label} onClick={() => setStepNum(index)}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          
            <form onSubmit={handleSubmit}>
              {stepNum === 0 && (<Grid container spacing={2} style={{ padding: "40px" }}>
                <Grid xs={12} md={12}>
                  <h4>Persnol Details:-</h4>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    autoComplete="given-name"
                    name="FullName"
                    required
                    fullWidth
                    id="FullName"
                    label="FullName"
                    value={employee.FullName}
                    onChange={(e) => handleChange(e)}
                    disabled={!editeFlag}
                    // defaultValue={FullName}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="Designation"
                    label="Designation"
                    name="Designation"
                    // value={Designation}
                    onChange={(e)=>handleChange(e)}
                    disabled={!editeFlag}
                    value={employee.Designation}
                    autoFocus
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="Email"
                    label="Email"
                    name="Email"
                    value={employee.Email}
                    onChange={(e)=>handleChange(e)}
                    disabled={!editeFlag}
                    autoFocus
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="Contact"
                    label="Contact"
                    name="Contact"
                    value={employee.Contact}
                    onChange={(e)=>handleChange(e)}
                    disabled={!editeFlag}
                    autoFocus
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                    fullWidth
                      required
                      id="DOB"
                      label="Date Of Birth"
                      name="DOB"
                      inputFormat="MM/DD/YYYY"
                      value={employee.DOB}
                      onChange={(value) =>
                        setEmployee({ ...employee, DOB: value })
                      }
                      disabled={!editeFlag}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                    fullWidth
                      required
                      id="Joining_Date"
                      label="Joinning Date"
                      name="Joining_Date"
                      inputFormat="MM/DD/YYYY"
                      value={employee.Joining_Date}
                      onChange={(value) =>
                        setEmployee({ ...employee, Joining_Date: value })
                      }
                      disabled={!editeFlag}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    name="Probation_Period"
                    label="ProbationPeriod"
                    id="Probation_Period"
                    value={employee.Probation_Period}
                    onChange={(e)=>handleChange(e)}
                    disabled={!editeFlag}
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
                    value={employee.Address}
                    onChange={(e)=>handleChange(e)}
                    disabled={!editeFlag}
                    autoFocus
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>)}

              {stepNum === 1 && (<Grid container spacing={2} style={{ padding: "40px" }}>
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    onChange={(e)=>handleChange(e)}
                    disabled={!editeFlag}
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>)}
              {stepNum === 2 && (<Grid container spacing={2} style={{ padding: "40px" }}>
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
                    onChange={(e)=>handleChange(e)}
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>)}
              {stepNum === 3 && (<Grid container spacing={2} style={{ padding: "40px" }}>
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}

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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
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
                    disabled={!editeFlag}
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>)}
              {editeFlag && (<Grid display="flex" justifyContent="flex-end">
                <Typography padding="15px">
                <Button type="submit" variant="contained">
                  Save 
                </Button>
                </Typography>
                <Typography padding="15px">
                <Button variant="contained">
                  Cancle
                </Button>
                </Typography>
              </Grid>)}
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Edituser;
