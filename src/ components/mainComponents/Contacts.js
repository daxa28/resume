import React from "react";
import classes from "./Contacts.module.css";

function Contacts() {
  return (
    <div className={classes.main}>
      <div></div>
      <div className={classes.main_block}>
        <div className={classes.title}>
          <h3>Контактная информация</h3>
        </div>
        <div className={classes.contacts}>
          <a href="https://t.me/DariaOsadchuk">
            <div className={classes.title}>t.me/DariaOsadchuk</div>
          </a>
          <br />
          osadasha201628@gmail.com
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Contacts;
