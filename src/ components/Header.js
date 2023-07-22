import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      
      <div className={classes.title}>
        Приветствую,
        <br />
        на сайте-резюме Junior Front-end разработчика!
      </div>
     
    </div>
  );
}

export default Header;
