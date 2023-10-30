import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        J u n i o r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F r o n t e n
        d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D e v e l o p e r
      </div>
    </div>
  );
}

export default Header;
