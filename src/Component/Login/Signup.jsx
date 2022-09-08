import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormControlLabel } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";




export default function SignUp() {
  const [fullName, setFullName] = React.useState();
  const [designation, setDesignation] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [contact, setContact] = useState();
  const [dob, setDob] = useState();
  const [address, setAddress] = useState();
  const [alternativeContact, setalternativeContact] = useState();
  const [reletivePerson, setReletivePerson] = useState();
  const [reletiveContact, setReletiveContact] = useState();
  const [joinnigDate, setJoinningDate] = useState();
  const [confirmJoinningDate, setConfirmJoinningDate] = useState();
  const [roleId, setRoleId] = React.useState();
  const [reporter, setReporter] = React.useState();
  const [probationPeriod, setProbationPeriod] = React.useState("");
  const [uploadPhoto, setUploadPhoto] = useState();
  const [documents, setDocuments] = useState();
  const [isConfirm, setIsConfirm] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });


    let item = {
      fullName,
      email,
      password,
      confirmPassword,
      designation,
      contact,
      dob,
      address,
      alternativeContact,
      reletivePerson,
      reletiveContact,
      joinnigDate,
      confirmJoinningDate,
      roleId,
      reporter,
      probationPeriod,
      uploadPhoto,documents,isConfirm


    }
    axios.post("http://localhost:3008/employee/signUp",
    item,
    {

      headers:{
        "Contents-Type": "application/json",
      }
    }
    
    )
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>console.log(err))

  }


  //   const result = await fetch("http:localhost:3008/employee/signUp",{
  //     method:"post",
  //     body:JSON.stringify(item),
  //     headers:{
  //       "Content-Types":"application/json",
  //       "Accept":"application/json"
  //     }
  //   })
      
  // }

  return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl required sx={{ minWidth: 120 }} fullWidth>
                  <InputLabel id="demo-simple-select-required-label">
                    RoleId
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={roleId}
                    label="roleId"
                    onChange={(e) => setRoleId(e.target.value)}
                  >
                    <MenuItem value={1}>one</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Thrre</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  id="designation"
                  label="Designation"
                  name="designation"
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact"
                  name="contact"
                  onChange={(e) => setContact(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  id="alternativeContact"
                  label="Alternative-Contact"
                  name="alternativeContact"
                  onChange={(e) => setalternativeContact(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  id="reletiveperson"
                  label="Reletive Person"
                  name="reletiveperson"
                  onChange={(e) => setReletivePerson(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  id="reletiveContact"
                  label="Reletive-Contact"
                  name="reletiveContact"
                  autoComplete="email"
                  onChange={(e) => setReletiveContact(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name="confirm"
                  label="Confirm-Password"
                  type="password"
                  id="confirm"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  type="date"
                  fullWidth
                  id="dob"
                  label="DOB"
                  name="dob"
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="date"
                  // label="Outlined secondary"
                  required
                  label="Joinning-Date"
                  fullWidth
                  id="joinningDate"
                  name="joinningDate"
                  onChange={(e) => setJoinningDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="date"
                  required
                  fullWidth
                  id="confirmJoinningDate"
                  label="Confirm-Date"
                  name="confirmJoinningDate"
                  onChange={(e) => setConfirmJoinningDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl required sx={{ minWidth: 120 }} fullWidth>
                  <InputLabel id="demo-simple-select-required-label">
                    Probation
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={probationPeriod}
                    label="probation"
                    onChange={(e) => setProbationPeriod(e.target.value)}
                  >
                    <MenuItem value={30}>30 Days</MenuItem>
                    <MenuItem value={45}>45 Days</MenuItem>
                    <MenuItem value={60}>60 Days</MenuItem>
                    <MenuItem value={90}>90 Days</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <FormControl required sx={{ minWidth: 120 }} fullWidth>
                  <InputLabel id="demo-simple-select-required-label">
                    Repoter
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={reporter}
                    label="repoter"
                    onChange={(e) => setReporter(e.target.value)}
                  >
                    <MenuItem value={"Jevin Sakhiya"}>Jevin Sakhiya</MenuItem>
                    <MenuItem value={"Shreyas Gajipara"}>
                      Shreyas Gajipara
                    </MenuItem>
                    <MenuItem value={"Sagar Anadkat"}>Sagar Anadkat</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

            

              <Grid item xs={12} sm={3}>
                <FormControl required sx={{ minWidth: 120 }} fullWidth>
                  <InputLabel id="demo-simple-select-required-label">
                    isConfirm
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={isConfirm}
                    label="isConfirm"
                    onChange={(e) => setIsConfirm(e.target.value)}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>NO</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <label htmlFor="">Upload Document</label>
                <input
                  required
                  type="file"
                  id="doc"
                  label="upload"
                  name="doc"
                  accept="application/pdf,application/vnd.ms-excel"
                  onChange={(e) => {
                    setDocuments(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <label htmlFor="">Upload Image</label>
                <input
                  type="file"
                  required
                  id="file"
                  label="Repoter"
                  name="file"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={(e) => setUploadPhoto(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
