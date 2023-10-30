import React from "react";
import classes from "./MainBody.module.css";
import html_css_img from "../../img/html-css.png";
import js_img from "../../img/img-js.png";
import react_img from "../../img/img-react.png";
import python_java_img from "../../img/img-python-java.png";
import git_sql_docke_img from "../../img/img-git-sql-docker.png";

function MainBody() {
  return (
    <div className={classes.main_body}>
      <div className={classes.main_body_block}>
        <div className={classes.block_left}>
          <div className={`${classes.block_l} ${classes.left}`}>
            <div className={classes.block_img}>
              <img src={react_img} alt="react-img"></img>
            </div>
            <div className={classes.block_content}>
              <p>
                Знаю React, компонентый подход разработки и их жизненный цикл,
                разбираюсь в рендеринге React DOM, в классовых и функциональных
                компонентах, писала кастомные хуки. Умею работать с
                маршрутизацией с помощью библиотеки React Router, понимаю
                принцип одностраничных веб-приложений (SPA). Работала с
                компонентами высшего порядка, а также разбираюсь в нововведениях
                в React 18. Работала с состоянием в React, изучила
                стейт-менеджер Redux. Для асинхронности использовала как Redux
                Thunk, так и Redux Saga. Умею работать с библиотекой RTKquery и
                с пакетом Redux Toolkit. Добавила в свои проекты на React
                типизацию – пишу на TypeScript.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.block_right}>
          <div className={`${classes.block_r} ${classes.right}`}>
            <div className={classes.block_content}>
              <p>
                Освоила JavaScript (ES6+), поработала с библиотекой jQuery,
                писала простой сервер на Expess.js, изучила Node.js. Решала
                задачи, разбиралась с асинхронностью и знаю, как работает
                EventLoop.
              </p>
            </div>
            <div className={classes.block_img}>
              <img src={js_img} alt="js-img"></img>
            </div>
          </div>
        </div>

        <div className={classes.block_left}>
          <div className={`${classes.block_l} ${classes.left}`}>
            <div className={classes.block_img}>
              <img src={html_css_img} alt="html-css-img"></img>
            </div>
            <div className={classes.block_content}>
              <p>
                Знаю HTML и CSS. Есть опыт создания HTML-страниц сайта на
                основании дизайн-макетов в Figma. Разбираюсь в создании
                адаптивной верстки (flexbox, grid). В процессе изучения изучила
                и применила препроцессоры SASS/SCSS, а также CSS модули. Понимаю
                методологию БЭМ. Знаю Bootstrap и Bootstrap react.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.block_right}>
          <div className={`${classes.block_r} ${classes.left}`}>
            <div className={classes.block_img}>
              <img src={git_sql_docke_img} alt="git-sql-docke-img"></img>
            </div>
            <div className={classes.block_content}>
              <p>
                Pаботала с сборщиком Webpack, писала конфигурацию сборки
                react-приложения для dev и prod режимах, подключала линтер
                ESLint. Работала с Docker – писала docker-compose файлы для
                запуска контейнеров с БД и Node.js. Написала сервер на Nest.js.
                Он подключается к БД Postgres с помощью TypeORM и отдаёт наружу
                GraphQL API. Фронтенд написан на React, взаимодействует с
                GraphQL API сервера с помощью библиотеки Apollo Client. Всё
                докеризовала. Понимаю принцип работы REST API, принципы ООП,
                SOLID и FSD архитектуры в фронтенд приложениях.
              </p>
            </div>
          </div>
        </div>

        <div className={classes.block_left}>
          <div className={`${classes.block_l} ${classes.right}`}>
            <div className={classes.block_content}>
              <p>
                Изучая язык Python, ознакомилась с библиотекой OpenPyXL. Парсила
                Excel-файл – прайс на 10+ страниц с более 10к товаров + их фото.
              </p>
              <p>
                В университете изучала язык Java, работала с библиотекой JavaFX.
                Писала линейный конгруэнтный генератор случайных чисел по
                заданной математической формуле с последующей отрисовкой на
                графике среднеквадратического отклонения полученных значений, с
                использованием визуального средства разработки Scene Builder.
                Изучала язык Python, ознакомилась с библиотекой OpenPyXL.
                Парсила Excel-файл – прайс на 10+ страниц с более 10к товаров +
                их фото. Проектировала архитектуру БД (MariaDB) для сохранения
                данных о товарах с прайс-листа из Python-приложения, используя
                SQL-запросы.
              </p>
            </div>
            <div className={classes.block_img}>
              <img src={python_java_img} alt="python-java-img"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
