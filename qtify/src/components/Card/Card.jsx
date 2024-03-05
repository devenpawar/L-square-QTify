import React, { useEffect, useState } from "react";
import CardMusic from "./CardMusic";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import "./Card.css";
import CircularProgress from "@mui/joy/CircularProgress";
import Carousel from "../Carousel/Carousel";

const Card = () => {
  const [topAlbumCard, setTopAlbumCard] = useState([]);
  const [newAlbumCard, setNewAlbumCard] = useState([]);
  const [isTopAlbumCollapsed, setIsTopAlbumCollapsed] = useState(true);
  const [isNewAlbumCollapsed, setIsNewAlbumCollapsed] = useState(true);

  const fetchCardMusic = async (url) => {
    try {
      const resp = await axios.get(url);
      const cards = resp.data;
      return cards;
    } catch (err) {
      console.error("Error fetching card music:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const topAlbumData = await fetchCardMusic(
        `https://qtify-backend-labs.crio.do/albums/top`
      );
      const newAlbumData = await fetchCardMusic(
        `https://qtify-backend-labs.crio.do/albums/new`
      );
      setTopAlbumCard(topAlbumData);
      setNewAlbumCard(newAlbumData);
    };

    fetchData();
  }, []);

  const handleTopAlbumCollapse = () => {
    setIsTopAlbumCollapsed(!isTopAlbumCollapsed);
  };

  const handleNewAlbumCollapse = () => {
    setIsNewAlbumCollapsed(!isNewAlbumCollapsed);
  };

  return (
    <>
      <div className="albums album-bar">
        <Typography>Top Albums</Typography>
        <Button onClick={handleTopAlbumCollapse}>
          {isTopAlbumCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      <Grid
        container
        className="albums"
        spacing={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {isTopAlbumCollapsed ? (
          <Grid item lg={11.3}>
            <Carousel>
              {topAlbumCard.length === 0 ? (
                <CircularProgress variant="solid" color="success" />
              ) : (
                topAlbumCard.map((cardItem, index) => (
                  <CardMusic card={cardItem} className="cards" />
                ))
              )}
            </Carousel>
          </Grid>
        ) : (
          <>
            {topAlbumCard.map((cardItem) => (
              <Grid item key={cardItem.id} xs={6} sm={4} md={3} lg={1.6}>
                <CardMusic card={cardItem} className="cards" />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <div className="albums album-bar">
        <Typography>New Albums</Typography>
        <Button onClick={handleNewAlbumCollapse}>
          {isNewAlbumCollapsed ? "Show All" : "Collapse"}
        </Button>
      </div>
      <Grid
        container
        spacing={2}
        className="albums"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {isNewAlbumCollapsed ? (
          <Grid item lg={11.2}>
            <Carousel>
              {newAlbumCard.map((cardItem, index) => (
                <CardMusic card={cardItem} className="cards" />
              ))}
            </Carousel>
          </Grid>
        ) : (
          <>
            {newAlbumCard.map((cardItem, index) => (
              <Grid item key={cardItem.id} xs={6} sm={4} md={3} lg={1.6}>
                <CardMusic card={cardItem} className="cards" />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default Card;
