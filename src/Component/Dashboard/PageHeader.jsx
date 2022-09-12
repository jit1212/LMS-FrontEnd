import PropTypes from "prop-types";
import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
  styled,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import parse from 'html-react-parser';
import { useState } from "react";
import Cookies from "js-cookie";

function formatAMPM(date) { // This is to display 12 hour format like you asked
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`;
}

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
`
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PageHeader = () => {
  const { currentUser } = useSelector((state) => state.employee);
  const [ open, setOpen ] = useState(false)
  const [ isClockIn, setIsClockIn ] = useState(false)
  console.log(currentUser?.ProfileImage, "pro===");
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleClockIn = () => {
    const date1 = new Date();
    const date2 = new Date();
    date2.setDate(date2.getDate() + 1)
    date2.setHours(0,0,0,0);
    Cookies.set('clockIn',formatAMPM(new Date()), { expires: (date2 - date1)/86400000 })
    setOpen(false)
  }
  const handleClockOut = () => {
    Cookies.remove('clockIn')
    setIsClockIn(false)
  }

  useEffect(() => {
    const clockIn = Cookies.get('clockIn');
    console.log(clockIn,'clockIn==')
    if(clockIn) {
      setIsClockIn(true)
    }
  })

  return (
    <>
    <PageTitle className="MuiPageTitle-wrapper">
      <Container maxWidth="100%" style={{ display: "flex" }}>
        <Grid container alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                mr: 2,
                width: 70,
                height: 70,
              }}
              variant="rounded"
              alt={currentUser?.FullName ?? ""}
              src={currentUser?.ProfileImage ?? ""}
            />
          </Grid>
          <Grid item>
            <Typography variant="h3" component="h3" gutterBottom>
              Welcome, {currentUser?.FullName ?? ""}!
            </Typography>
            <Typography variant="subtitle2">
              Today is a good day to start !
            </Typography>
          </Grid>
          <Grid></Grid>
        </Grid>
        <Grid display="flex" alignItems="center" minWidth={'fit-content'}>
          {!isClockIn && (<Typography>
            <Button variant="contained" color="primary" sx={{width: 'fit-content'}} onClick={handleOpen}>
              Clock In
            </Button>
          </Typography>)}
          {isClockIn && (<Typography>
            <Button variant="contained" color="error" sx={{width: 'fit-content'}} onClick={handleClockOut}>
              Clock Out 
            </Button>
          </Typography>)}
        </Grid>

      </Container>
    </PageTitle>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Clock In"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            To Enter your Office IN time please click on Clock In Button.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
          <Button onClick={handleClockIn} variant="contained" color="primary">Clock In</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
