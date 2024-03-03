import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import QButton from "../Button/Button";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <Searchbar />
      <QButton name="Give Feedback" />
    </nav>
  );
}
