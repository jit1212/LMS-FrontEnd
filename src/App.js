import react from "react"
import "./App.css"

import { createTheme } from "@mui/material/styles"
import PersistentDrawerLeft from "./Component/Theme/PersistentDrawerLeft"
import Signin from "./Component/Login/Signin"

const theme = createTheme({
  typography: {
    allVariants: {
      //   fontFamily: "sans-serif",
      fontFamily: [
        "Nunito",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
      textTransform: "none",
      fontSize: 14,
    },
  },
})

const App = () => {
  return (
    <>
      <PersistentDrawerLeft />
      {/* <Signin /> */}
    </>
  )
}

export default App
