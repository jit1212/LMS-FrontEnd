import Card from "react-bootstrap/Card"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Grid } from "@mui/material"
import "./card.css"

const DashCard = () => {
  return (
    <Card
      style={{
        width: "23rem",
        height: "7rem",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      <Grid style={{ display: "flex", alignItems: "center" }}>
        <Grid className=" text-muted bg-primary">
          <ShoppingCartIcon
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

export default DashCard
