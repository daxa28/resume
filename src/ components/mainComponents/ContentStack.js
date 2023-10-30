import React, { Fragment } from "react";
import classes from "./ContentStack.module.css";

function ContentStack() {
  return (
    <Fragment>
      <div className={classes.title}>Основной стек</div>
      <div className={classes.block1}>
        <div className={classes.value}>TypeScript</div>
        <div className={classes.value}>React</div>
        <div className={classes.value}>Redux</div>
        <div className={classes.value}>HTML</div>
        <div className={classes.value}>CSS</div>
      </div>
      <div className={classes.block2}>
        <a href="#part1">
          <div className={classes.star}>&#10040;</div>
        </a>
        <div className={classes.line}></div>
        <a href="#part4">
          <div className={classes.star}>&#10040;</div>
        </a>
        <div className={classes.line}></div>
        <a href="#part5">
          <div className={classes.star}>&#10040;</div>
        </a>
        <div className={classes.line}></div>
        <a href="#part5">
          <div className={classes.star}>&#10040;</div>
        </a>
        <div className={classes.line}></div>
        <a href="#part5">
          <div className={classes.star}>&#10040;</div>
        </a>
      </div>
    </Fragment>
  );
}

export default ContentStack;
