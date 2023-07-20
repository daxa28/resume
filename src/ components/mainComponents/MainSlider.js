import React from "react";
import classes from "./MainSlider.module.css";
import Carousel from "./carousel/Carousel";
import img_slider_1 from "../../img/slider-1.jpg";
import img_slider_2 from "../../img/slider-2.jpg";
import img_slider_3 from "../../img/slider-3.jpg";

function MainSlider() {
  return (
    <div>
      <div className={classes.title}>
        <h3>Философия времени</h3>
      </div>
      <div className={classes.main}>
        <div></div>
        <div className={classes.main_block}>
          <Carousel>
            <div className={classes.item}>
              <div className={classes.image}>
                <img src={img_slider_1} alt="img-slider-1" />
              </div>
              <div className={classes.content}>
                <div class={classes.popover__wrapper}>
                  <p class={classes.popover__title}>Перевод</p>
                  <div class={classes.popover__content}>
                    <p class={classes.popover__message}>
                      "На самом деле соотношение времени чтения и написания кода
                      превышает 10:1. Мы постоянно читаем свой старый код,
                      поскольку это необходимо для написания нового кода... Если
                      вы хотите быстро справиться со своей задачей, если вы
                      хотите, чтобы ваш код было легко писать — позаботьтесь о
                      том, чтобы он легко читался."
                    </p>
                    <h4>Роберт С. Мартин</h4>
                  </div>
                </div>
                <p>
                  "The ratio of time spent reading versus writing is well over
                  10 to 1. We are constantly reading old code as part of the
                  effort to write new code... So if you want to go fast, if you
                  want to get done quickly, if you want your code to be easy to
                  write, make it easy to read."
                </p>
                <h4>Robert C. Martin</h4>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.content}>
                <div class={classes.popover__wrapper}>
                  <p class={classes.popover__title}>Перевод</p>
                  <div class={classes.popover__content}>
                    <p class={classes.popover__message}>
                      "Любой дурак может написать код, который поймет компьютер.
                      Хорошие программисты пишут код, который могут понять
                      люди."
                    </p>
                    <h4>Мартин Фаулер</h4>
                  </div>
                </div>
                <p>
                  "Any fool can write code that a computer can understand. Good
                  programmers write code that humans can understand."
                </p>
                <h4>Martin Fowler </h4>
              </div>
              <div className={classes.image}>
                <img src={img_slider_2} alt="img_-lider-2"></img>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.image}>
                <img src={img_slider_3} alt="img-slider-3"></img>
              </div>
              <div className={classes.content}>
                <div class={classes.popover__wrapper}>
                  <p class={classes.popover__title}>Перевод</p>
                  <div class={classes.popover__content}>
                    <p class={classes.popover__message}>
                      "Программирование — это сложно. Основные правила, на
                      которых все строится, очень просты, но по мере разработки
                      программа сама начинает вводить свои правила и законы.
                      Таким образом, программист строит лабиринт, в котором сам
                      же может и потеряться."
                    </p>
                    <h4>Марин Хавербеке</h4>
                  </div>
                </div>
                <p>
                  "Programming, it turns out, is hard. The fundamental rules are
                  typically simple and clear. But programs built on top of these
                  rules tend to become complex enough to introduce their own
                  rules and complexity. You’re building your own maze, in a way,
                  and you might just get lost in it."
                </p>
                <h4>Marijn Haverbeke</h4>
              </div>
            </div>
          </Carousel>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MainSlider;
