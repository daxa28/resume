import React from "react";
import classes from "./Footer.module.css";
import gmail_icon from "../img/gmail-icon.png";
import git_icon from "../img/git-icon1.png";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_block}>
        <div>
          <div className={classes.icon}>
          <img src={gmail_icon} alt="gmail-icon"></img>
        </div>
        <div className={classes.title}>osadasha201628@gmail.com</div>
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
