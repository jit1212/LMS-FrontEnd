import { Grid } from "@mui/material"
import React from "react"
import DashCard from "./DashCard"
import ProductCard from "./ProductCard"
import UserCards from "./UserCards"
import "./card.css"

const Cards = () => {
  return (
    <>
      <Grid className="card-demo">
        <DashCard />
        <UserCards />
        <ProductCard />
      </Grid>
    </>
  )
}

export default Cards
