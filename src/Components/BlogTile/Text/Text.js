import React from "react";

const styles = {
  margin: 0,
  padding: "15px",
  fontFamily: "Arial",
  fontSize: "15px",
  color: "#e76f51",
  anchor: {
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default function Text({ txt, clickAnchor }) {
  return (
    <p style={styles}>
      {txt}
      <span style={styles.anchor}>{clickAnchor}</span>
    </p>
  );
}
