// import React from "react";
// import styles from "./Button.module.css";
// export default function Button({ name }) {
//   return <button className={styles.feedbackButton}>{name}</button>;
// }

import React from "react";
import Button from "@mui/material/Button";
import "./QButton.css";
export default function QButton({ name }) {
  return (
    <Button
      variant="contained"
      className="button"
      sx={{
        color: "#34C94B",
        "background-color": "#121212",
        borderRadius: 3,
        "font-family": "Poppins",
      }}
    >
      {name}
    </Button>
  );
}
