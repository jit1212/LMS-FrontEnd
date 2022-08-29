import Card from "react-bootstrap/Card"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"

import { Grid } from "@mui/material"

const ProductCard = () => {
  return (
    <Card
      style={{
        width: "23rem",
        height: "7rem",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      <Grid
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          className=" text-muted "
          style={{
            backgroundColor: "#e91e63",
          }}
        >
          <ShoppingBagIcon
            style={{
              color: "white",
              height: "40px",
              width: "54px",
            }}
          />
        </Grid>
        <ul className="listing">
          <li className="headList">200,521</li>
          <li>Total Orders</li>
        </ul>
      </Grid>
    </Card>
  )
}

export default ProductCard
