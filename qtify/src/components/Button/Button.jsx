// import React from "react";
// import styles from "./Button.module.css";
// export default function Button({ name }) {
//   return <button className={styles.feedbackButton}>{name}</button>;
// }

import React from "react";
import Button from "@mui/material/Button";
import "./Qbutton.css";
export default function Qbutton({ content }) {
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
      {content}
    </Button>
  );
}
