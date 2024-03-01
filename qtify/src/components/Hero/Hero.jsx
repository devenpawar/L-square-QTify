import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  <div className={styles.hero}>
    <div>
      <div>
        <h1>100 Thousand songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
      </div>
      <div>
        <img src={require("../../assets/hero.png")} width={212} alt="headphone" />
      </div>
    </div>
  </div>;
}
