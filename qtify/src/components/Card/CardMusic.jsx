import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import "./CardMusic.css";

const CardMusic = ({ card }) => {
  return (
    <div>
      <Card sx={{ borderRadius: "1rem" }}>
        <CardMedia
          component="img"
          alt="Spotify Image"
          image={card.image}
          sx={{ height: "12rem" }}
        />
        <CardContent
          sx={{
            display: "relative",
            height: "3.5rem",
          }}
        >
          <Chip
            label={`${
              card.follows
                ? ` ${card.follows} Follows`
                : ` ${card.likes} Likes:`
            }`}
            sx={{
              background: "black",
              color: "white",
              display: "relative",
            }}
          />
        </CardContent>
      </Card>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {card.title}
      </Typography>
    </div>
  );
};

export default CardMusic;
