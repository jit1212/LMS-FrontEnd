import Card from "react-bootstrap/Card"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"

import { Grid } from "@mui/material"

const UserCards = () => {
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
        <Grid
          className=" text-muted "
          style={{
            backgroundColor: "#7e57c2",
          }}
        >
          <PeopleAltIcon
            style={{
              color: "white",
              height: "40px",
              width: "40px",
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

export default UserCards
