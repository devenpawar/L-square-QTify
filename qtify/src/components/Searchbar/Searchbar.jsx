import React from "react";
import styles from "./Searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";

function Searchbar() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.search}
        placeholder="Enter an album name"
      />
      <button className={styles.searchButton}>{<SearchIcon />}</button>
    </div>
  );
}

export default Searchbar;
