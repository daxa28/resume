import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
      <p>Junior</p>
      <p>Frontend</p>
      <p>Developer</p>
      </div>
    </div>
  );
}

export default Header;
