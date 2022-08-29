import { Grid, Typography } from "@mui/material"
import React from "react"
import BasicTable from "./BasicTable"
import DashCard from "./card/DashCard"
import ProductCard from "./card/ProductCard"
import UserCards from "./card/UserCards"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <Grid className="Dashboard ">
      <h2 style={{ color: "rgba(55, 65, 81)" }}>Dashboard</h2>
      <Typography
        style={{
          marginTop: "20px",
          display: "flex",
          //   padding: "20px",
          justifyContent: "space-between",
        }}
      >
        <UserCards />
        <DashCard />
        <ProductCard />
      </Typography>
      <Typography style={{ marginTop: "20px" }}>
        <BasicTable />
      </Typography>
    </Grid>
  )
}

export default Dashboard
