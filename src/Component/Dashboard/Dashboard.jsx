import { Avatar, Grid, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import BasicTable from "./BasicTable"
import DashCard from "./card/DashCard"
import ProductCard from "./card/ProductCard"
import UserCards from "./card/UserCards"
import "./Dashboard.css"
import PageHeader from "./PageHeader"

const Dashboard = () => {
 const  {currentUser} = useSelector((state)=>state.employee)
 console.log(currentUser,'cur===');
 
  return (
    <Grid className="Dashboard " marginTop="10">  
    
      <h2 style={{ color: "rgba(55, 65, 81)" }}>Dashboard</h2>
      <PageHeader/>
      <Grid
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
      </Grid>
      
      {(currentUser?.RoleId === 1 || currentUser?.RoleId === 2) && (<Grid style={{ marginTop: "20px" }}>
        <BasicTable />
      </Grid>)}
    </Grid>
  )
}

export default Dashboard
