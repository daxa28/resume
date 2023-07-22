import React from "react";
import classes from "./MainHeader.module.css";
import avatar from "../../img/avatar.jpg";

function MainHeader() {
  return (
    <div className={classes.main__header}>
      <div className={classes.main__header_block}>
        <div className={classes.title}>
          Меня зовут Дарья, мне 22 года
          <br />и мне интересно развиваться в направлении информационных
          технологий.
          <p>
            Образование: Высшее
            <br />
            График работы: Полный день
            <br />
            <br />
            Контактная информация
            <br />
            email: osadasha201628@gmail.com
            <br />
            telegram: <a href="https://t.me/DariaOsadchuk">@DariaOsadchuk</a>
          </p>
        </div>
        <div className={classes.avatar}>
          <img src={avatar} alt="avatar"></img>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
