import React from "react";
import classes from "./MainHeader.module.css";
import avatar from "../../img/avatar.jpg";

function MainHeader() {
  return (
    <div className={classes.main__header}>
      <div></div>
      <div className={classes.block_main_header}>
        <div className={classes.title}>
          Меня зовут Дарья, мне 22 года
          <br />и мне интересно развиваться в направлении информационных
          технологий.
          <p>
          Образование: Высшее 
          <br />График работы: Полный день
          <br />Контактная информация: 
          <br />email - osadasha201628@gmail.com
          <br />telegram - t.me/DariaOsadchuk</p>
        </div>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar"></img>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MainHeader;
