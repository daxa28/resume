import React, { Fragment } from "react";
import classes from "./MainContentStack.module.css";

function MainContentStack() {
  return (
    <Fragment>
      <div className={classes.title}>Мой стек изучения</div>
      <div className={classes.block1}>
        <div className={classes.value}>HTML</div>
        <div className={classes.value}>CSS</div>
        <div className={classes.value}>JS</div>
        <div className={classes.value}>React</div>
        <div className={classes.value}>Python</div>
        <div className={classes.value}>Java</div>
        <div className={classes.value}>SQL</div>
        <div className={classes.value}>Git</div>
        <div className={classes.value}>Docker</div>
      </div>
      <div className={classes.block2}>
        <a href="#part1">
          <div className={classes.star}>&#10040;</div>
        </a>

        <div className={classes.line}></div>
        <a href="#part1">
          <div className={classes.star}>&#10040;</div>
        </a>
        <div className={classes.line}></div>
        <a href="#part2">
          <div className={classes.star}>&#10040;</div>
        </a>
        <div className={classes.line}></div>
        <a href="#part3">
          <div className={classes.star}>&#10040;</div>
        </a>
        <div className={classes.line}></div>
        <a href="#part4">
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

export default MainContentStack;
