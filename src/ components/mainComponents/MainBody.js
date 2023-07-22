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
              <img src={html_css_img} alt="html-css-img"></img>
            </div>
            <div className={classes.block_content}>
              <article id="part1">
                <h3>HTML и CSS</h3>
              </article>
              <p>
                Знаю язык HTML и CSS. Есть опыт создания HTML-страниц сайта на
                основании дизайн-макетов в Figma. Разбираюсь в создании
                адаптивной верстки&#40;flexbox, grid&#41;. В процессе изучения
                познакомилась с метаязыком SASS. Взаимодействовала с Bootstrap и
                Bootstrap react.
              </p>
              <ul>
                <a
                  href="https://github.com/daxa28/HTML_CSS_Bootstrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>HTML + CSS + Flexbox + Bootstrap</li>
                </a>
                <a
                  href="https://github.com/daxa28/HTML_CSS_Grid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>HTML + CSS + Grid</li>
                </a>
                <a
                  href="https://github.com/daxa28/HTML_CSS_Figma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>HTML + CSS + Figma</li>
                </a>
                <a
                  href="https://github.com/daxa28/ReduxToolkit_RTKquery_TS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>HTML + React Bootstrap</li>
                </a>
              </ul>
            </div>
          </div>
          <div className={classes.block_r}></div>
        </div>

        <div className={classes.block_right}>
          <div className={`${classes.block_r} ${classes.right}`}>
            <div className={classes.block_content}>
              <article id="part2">
                <h3>JavaScript</h3>
              </article>
              <p>
                Освоила JavaScript, поработала с библиотекой jQuery, писала
                простейший сервер на Expess.js, немного изучила Node.js, решала
                задачи на JS для лучшего понимания работы циклов, функций и
                методов.
              </p>
              <ul>
                <a
                  href="https://github.com/daxa28/JS_jQuery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>JS + jQuery</li>
                </a>
                <a
                  href="https://github.com/daxa28/JS_Express"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>Expess.js</li>
                </a>
                <a
                  href="https://github.com/daxa28/JS_Node"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>Node.js</li>
                </a>
                <a
                  href="https://github.com/daxa28/tasks_JS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>Решение задач</li>
                </a>
              </ul>
            </div>
            <div className={classes.block_img}>
              <img src={js_img} alt="js-img"></img>
            </div>
          </div>
        </div>
        <div className={classes.block_left}>
          <div className={`${classes.block_l} ${classes.left}`}>
            <div className={classes.block_img}>
              <img src={react_img} alt="react-img"></img>
            </div>
            <div className={classes.block_content}>
              <article id="part3">
                <h3>React</h3>
              </article>
              <p>
                Взаимодействовала с JavaScript-библиотекой React. Разобралась в
                его компонентом подходе, рендеринге ReactDOM и в основных
                встроенных хуках. Научилась создавать классовые и функциональные
                компоненты, а также кастомные хуки. Взаимодействовала с
                состоянием в React и изучила стейт-менеджер Redux, а также для
                работы с асинхронностью изучила библиотеки Redux Thunk и Redux
                Saga. Поработала с пакетом Redux Toolkit и библиотекой RTKquery.
                Для полноты эффекта создания приложений с использованием React и
                Redux изучила язык TypeScript.
              </p>
              <ul>
                <a
                  href="https://github.com/daxa28/project_React"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>React</li>
                </a>
                <a
                  href="https://github.com/daxa28/React_Router"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>React + React router</li>
                </a>
                <a
                  href="https://github.com/daxa28/ReduxThunk_ReduxSaga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>React + Redux + Redux Thunk + Redux Saga</li>
                </a>
                <a
                  href="https://github.com/daxa28/React_Redux_TS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>React + Redux + TypeScript</li>
                </a>
                <a
                  href="https://github.com/daxa28/ReduxToolkit_RTKquery_TS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>Redux Toolkit + RTKquery + TypeScript</li>
                </a>
              </ul>
            </div>
          </div>
          <div className={classes.block_r}></div>
        </div>

        <div className={classes.block_right}>
          <div className={`${classes.block_r} ${classes.right}`}>
            <div className={classes.block_content}>
              <article id="part4">
                <h3>Python и Java</h3>
              </article>
              <p>
                Изучая язык Python, ознакомилась с библиотекой OpenPyXL. Парсила
                Excel-файл – прайс на 10+ страниц с более 10к товаров + их фото.
              </p>
              <p>
                В университете изучали язык Java, работали с библиотекой JavaFX.
                Написала линейный конгруэнтный генератор случайных чисел по
                заданной математической формуле с последующей отрисовкой на
                графике среднеквадратического отклонения полученных значений
                &#40;использование Scene Builder&#41;.
              </p>
              <ul>
                <a
                  href="https://github.com/daxa28/JavaFX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>Java + JavaFX</li>
                </a>
              </ul>
            </div>
            <div className={classes.block_img}>
              <img src={python_java_img} alt="python-java-img"></img>
            </div>
          </div>
        </div>
        <div className={classes.block_left}>
          <div className={`${classes.block_l} ${classes.left}`}>
            <div className={classes.block_img}>
              <img src={git_sql_docke_img} alt="git-sql-docke-img"></img>
            </div>
            <div className={classes.block_content}>
              <article id="part5">
                <h3>SQL, Git и Docker</h3>
              </article>
              <p>
                В процессе обучения поработала с Git'ом. Спроектировала
                архитектуру БД &#40;MariaDB&#41; для сохранения данных о товарах
                с прайс-листа из Python-приложения, используя SQL-запросы.
                Работала с Docker – запускала контейнеры с БД, Nodejs, Python
                внутри &#40;в процессе помогал и объяснял знакомый backend
                разработчик&#41;.
              </p>
            </div>
          </div>
          <div className={classes.block_r}></div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
