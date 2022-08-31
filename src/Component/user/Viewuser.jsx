import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from "axios"
import { useParams } from "react-router-dom"


const  Viewuser = () => {
    const {Id} = useParams()
    // console.log("Employee_Id",Employee_Id);
    const [user,setUser] = React.useState([])
    
    const handleSumbit = async e =>{
        e.preventDefault();
        
    }
    React.useEffect(()=>{

        axios.get(`http://localhost:3008/employee/allEmpDetails?Emp_Id=${Id}`)
        .then((res)=>setUser(res.data))
        .catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(user);
    
    
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            // padding: 5,
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
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSumbit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="firstName"
                  name="firstName"              
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                //   value={firstName}
                //   onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"

                  autoComplete="family-name"
                //   value={lastName}
                //   onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                //   onChange={handleChange}
                // //   value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="designation"

                  label="Designation"
                  id="designation"
                //   value={designation}
                //   onChange={handleChange}
                //   autoComplete="new-password"
                />
              </Grid>
            

              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
  )
}
export default Viewuser;
