import * as React from "react"
import "./Appbar.css"
import "./sidebar.css"
import { styled, useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import InputBase from "@mui/material/InputBase"
import Badge from "@mui/material/Badge"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import AccountCircle from "@mui/icons-material/AccountCircle"
import NotificationsIcon from "@mui/icons-material/Notifications"
import MoreIcon from "@mui/icons-material/MoreVert"
import Sidebar from "./Sidebar"
import RoutesDsah from "../Dashboard/RoutesDash"
import { Avatar } from "@mui/material"
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined"
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank"
import { Link } from "react-router-dom"

const Data = [
  {
    name: "Dashboard",
    path: <DashboardOutlinedIcon className="icons" />,
  },
  {
    name: "Employee",
    path: <TableRestaurantOutlinedIcon className="icons" />,
  },
  {
    name: "Forms",
    path: <TableRestaurantOutlinedIcon className="icons" />,
  },
  {
    name: "Cards",
    path: <PaymentOutlinedIcon className="icons" />,
  },
  {
    name: "Model",
    path: <TableRestaurantOutlinedIcon className="icons" />,
  },
  {
    name: "Blank",
    path: <CheckBoxOutlineBlankIcon className="icons" />,
  },
]

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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // focus:,
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

export default function PersistentDrawerLeft() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const [state, setState] = React.useState({
    activeObject: Data[0],
    Data,
  })

  const ToggleActive = (i) => {
    setState({ ...state, activeObject: state.Data[i] })
  }
  const toggleActiveStyle = (i) => {
    if (state.Data[i] === state.activeObject) {
      return "box active"
    } else return "box inactive"
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="Appbarone"
        position="fixed"
        open={open}
        style={{ backgroundColor: "white", padding: "5px" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            style={{ color: "black" }}
          >
            <MenuIcon />
          </IconButton>

          <Search style={{ border: "1px solid #EBECF0" }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon style={{ color: "black" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon style={{ color: "black" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgba(17, 24, 39)",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "white" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <ul className="logo">
          <li></li>
          <li>VDashboard</li>
        </ul>
        <List>
          {Data.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              className={toggleActiveStyle(index)}
              onClick={() => ToggleActive(index)}
            >
              <Link to={text.name} className="link">
                <ListItemIcon className="icons">{text.path}</ListItemIcon>
                <ListItemText>{text.name}</ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <Sidebar
          data={
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon style={{ color: "white" }} />
                ) : (
                  <ChevronRightIcon classsName="closeIcon" />
                )}
              </IconButton>
            </DrawerHeader>
          }
        /> */}
      </Drawer>
      <Main className="main" open={open}>
        <DrawerHeader />
        {/* <Dashboard /> */}
        <RoutesDsah />
      </Main>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}
