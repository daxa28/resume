import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <span className="text">J u n i o r</span>
        <span className="text">F r o n t e n d</span>
        <span className="text">D e v e l o p e r</span>
      </div>
    </div>
  );
}

export default Header;
