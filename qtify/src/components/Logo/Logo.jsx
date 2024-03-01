import React from "react";
import LogoImage from "../../assets/LogoImage.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={LogoImage} alt="Q-tify Logo" width={65} />
    </div>
  );
}
