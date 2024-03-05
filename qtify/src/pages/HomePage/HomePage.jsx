import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Song from "../../components/Song/Song";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Song />
    </>
  );
}
