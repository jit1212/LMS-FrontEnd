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
import { commentsDollar } from "fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
import PersistentDrawerLeft from "../Theme/PersistentDrawerLeft";
import SignUp from "./Signup";
import { useCookies } from 'react-cookie';

// const getToken = () => {
//   const tokenString = sessionStorage.getItem("token");
//   const user_details = JSON.parse(tokenString);
//   return user_details;
// };
// const getUser = () => {
//   const userString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(userString);
//   return userToken;
// };
// // const [token, setToken] = React.useState(getToken());
// // const [user, setUser] = React.useState(getUser());
// const [token, setToken] = React.useState(getToken());
// const [user, setUser] = React.useState(getUser());
// setToken(token);
// setUser(user);
// const saveToken = (token) => {
// sessionStorage.setItem("token", JSON.stringify(token));
// sessionStorage.setItem("user", JSON.stringify(user));
// };

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [msg, setMsg] = React.useState();
  const [error, setError] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [cookies, setCookie] = useCookies();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3008/employee/signIn",
        { email, password },
        {
          headers: {
            "Contents-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res,'login===');
        const data = res.data;
        setCookie('user',data.UserData);
        setCookie('token',data.UserToken)
        if(data.message === 'Login successfull') {
          navigate('/Dashboard')
        }
      })
      .catch((error)=>{
        setError("");
        setError(error.response.data.message)
      });
  };

  return (
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
        Sign in
      </Typography>
      {msg && <p style={{ color: "red" }}>{msg}</p>}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="Resister" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;