import * as React from "react"
import "../Theme/Appbar.css"
// import "../Theme/Sidebar.css"
import RoutesDsah from "../../RoutesDash"
import NavBar from "../NavBar/NavBar"
import { styled, useTheme } from "@mui/material/styles"
import { useLocation } from "react-router-dom"
import Box from "@mui/material/Box"

const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
)

export default function ContextWrapper() {
  const route = useLocation();
  const pathName = route.pathname;
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {pathName == '/login' || pathName == '/Resister' ? null : <NavBar open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} />}
        <Main className="main" open={open}>
          {/* <Dashboard/> */}
          <RoutesDsah />
        </Main>
      </Box>
    </>
  )
}
