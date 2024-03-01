import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Logo />
      <Searchbar />
      <Button name="Give Feedback" />
    </nav>
  );
}