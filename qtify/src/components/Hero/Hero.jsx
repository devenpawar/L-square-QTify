import React from "react";
import "./Hero.module.css";
import Grid from "@mui/material/Grid";
import Headphone from "../../assets/hero.png";

const Hero = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "black", color: "white", padding: "3rem" }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "end",
            marginBottom: "1rem"
          }}
        >
          <h2>100 Thousand Songs, ad-free</h2>
          <h2>Over thousands podcast episodes”</h2>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={Headphone}
            alt="Your"
            style={{ width: "20%", height: "20%" }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Hero;
