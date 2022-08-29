import { display } from "@mui/system"
import React from "react"

const Cards = () => {
  return (
    <div style={{ backgroundColor: "rgba(229,231,235)" }}>
      <div style={{ padding: "1.2rem" }}>
        <h1>Cards</h1>

        <p>Stacked</p>

        <div className="card" style={{ width: "25rem" }}>
          <img
            className="card-img-top"
            src="	https://picsum.photos/id/1016/384/234"
            alt="Card image cap"
          />
          <div className="card-body">
            <h2>The Coldest Sunset</h2>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div
            style={{
              padding: "2rem",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                border: "none",
                borderRadius: "20px",
                backgroundColor: "rgba(229,231,235)",
                padding: "8px",
              }}
            >
              #Photography
            </div>
            <div
              style={{
                border: "none",
                borderRadius: "20px",
                backgroundColor: "rgba(229,231,235)",
                padding: "8px",
              }}
            >
              #Traval
            </div>
            <div
              style={{
                border: "none",
                borderRadius: "20px",
                backgroundColor: "rgba(229,231,235)",
                padding: "8px",
              }}
            >
              #Winter
            </div>
          </div>
        </div>
        <p>Horizontal</p>

        <div className="card w-75">
          <div style={{ display: "flex" }}>
            <div>
              <img
                className="card-img-top"
                src="https://picsum.photos/id/0/192/213
            "
                alt="Card image cap"
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">
                Can coffee make you a better developer?
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div style={{ display: "flex" }}>
                <img
                  style={{ borderRadius: "50px" }}
                  src="https://via.placeholder.com/50"
                />
                <p>Jonathan Reinink</p>
                <p>Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
