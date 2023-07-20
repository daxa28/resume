import React, { Fragment } from "react";
import MainHeader from "./mainComponents/MainHeader";
import MainContentStack from "./mainComponents/MainContentStack";
import MainBody from "./mainComponents/MainBody";
import MainContentWhyIT from "./mainComponents/MainContentWhyIT";
import MainSlider from "./mainComponents/MainSlider";
import MainContentAmoutMe from "./mainComponents/MainContentAmoutMe";

function Main() {
  return (
    <Fragment>
      <MainHeader />
      <MainContentStack />
      <MainBody />
      <MainContentWhyIT />
      <MainSlider />
      <MainContentAmoutMe />
    </Fragment>
  );
}

export default Main;
