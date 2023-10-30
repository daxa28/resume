import React from "react";
import classes from "./CardMyProject.module.css";
import img_WhyIT from "../../img/my-proj.avif";

function CardMyProject() {
  return (
    <div className={classes.main}>
      <div className={classes.main_block}>
        <div className={classes.main_block__content}>
          <h3>Примеры работ</h3>
          <p>
            На &nbsp;
            <a
              href="https://github.com/daxa28"
              target="_blank"
              rel="noopener noreferrer"
            >
              G i t H u b
            </a>
            &nbsp; есть примеры проектов. В одном из них я собрала работу с
            двумя REST API, такими как JSONPlaceholder и Google Books APIs. Так
            же написала небольшой бэкенд для предоставления GraphQL API.
          </p>
          <br />
          <p>
            Данный проект создан для отображения навыков работы с библиотекой
            React (+ React Router), Redux (+ Thunk, + Saga, + Toolkit), работы с
            препроцессором SCSS и CSS modules. Cборка проекта происходит при
            помощи написанной конфигурации для Webpack, в prod и dev режиме.
            Была подключена библиотека Jest для тестирования и настроен линтер
            ESLint.
          </p>
          <br />
          <p>
            Проект докеризирован, поэтому его можно запустить в dev/prod режиме
            с помощью docker-compose команд, предварительно скопировав и
            настроив env-файл. Более подробная информация для развертывания
            данного проекта на своем компьютере находиться в Readme файле в
            корневой папке проекта. Советую запускать в prod режиме, так как в
            dev режиме достаточно долго будут устанавливаться все пакеты.
          </p>
          <br />
          <p>
            <a
              href="https://github.com/daxa28/Panda"
              target="_blank"
              rel="noopener noreferrer"
            >
              С с ы л к а&nbsp;&nbsp;&nbsp;н а&nbsp;&nbsp;&nbsp;п р о е к т .
            </a>
          </p>
        </div>
        <div className={classes.main_block__image}>
          <img src={img_WhyIT} alt="img-WhyIT"></img>
        </div>
      </div>
    </div>
  );
}

export default CardMyProject;
