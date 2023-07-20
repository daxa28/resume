import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div></div>
      <div className={classes.title}>
        Приветствую,
        <br />
        на сайте-резюме Junior Front-end разработчика!
      </div>
      <div></div>
    </div>
  );
}

export default Header;
