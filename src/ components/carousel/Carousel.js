import React, { useState, Children, cloneElement } from "react";
import classes from "./Carousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Carousel({ children }) {
  const [offset, setOffset] = useState(0);

  const PAGE_WIDTH = 100;

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      if (Math.min(newOffset - 1, 0) === 0) {
        return maxOffset;
      }
      return newOffset;
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      if (Math.max(newOffset + 1, maxOffset) === maxOffset) {
        return 0;
      } else {
        return newOffset;
      }
    });
  };

  const [pages] = useState(
    Children.map(children, (child) => {
      return cloneElement(child, {
        style: {
          height: `${PAGE_WIDTH}%`,
          minWidth: `${PAGE_WIDTH}%`,
          maxWidth: `${PAGE_WIDTH}%`,
        },
      });
    })
  );

  return (
    <div className={classes.main_container}>
      <FaChevronLeft className={classes.arrow} onClick={handleLeftArrowClick} />
      <div className={classes.window}>
        <div
          className={classes.all_pages_container}
          style={{
            transform: `translateX(${offset}%)`,
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight
        className={classes.arrow}
        onClick={handleRightArrowClick}
      />
    </div>
  );
}

export default Carousel;
