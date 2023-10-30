import React from "react";
import classes from "./Footer.module.css";
import telegram_icon from "../img/telegram-icon.png";
import git_icon from "../img/git-icon1.png";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_block}>
        <div>
          <div className={classes.icon}>
            <img src={telegram_icon} alt="telegram_icon"></img>
          </div>
          <a href="https://t.me/DariaOsadchuk">
            <div className={classes.title}>t.me/DariaOsadchuk</div>
          </a>
        </div>
        <div>
          <div className={classes.icon}>
            <img src={git_icon} alt="git-icon"></img>
          </div>
          <a href="https://github.com/daxa28">
            <div className={classes.title}>github.com/daxa28</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
