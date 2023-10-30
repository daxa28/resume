import React from "react";
import classes from "./MainHeader.module.css";
import avatar from "../../img/avatar.jpg";

function MainHeader() {
  return (
    <div className={classes.main__header}>
      <div className={classes.main__header_block}>
        <div className={classes.title}>
          <h3>Осадчук Дарья</h3>
          <br />
          <br />
          Возраст: 22 года
          <br />
          <br />
          Образование: Высшее
          <br />
          График работы: Полный день
          <br />
          <br />
          Специализация: программист, разработчик
        </div>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar"></img>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
