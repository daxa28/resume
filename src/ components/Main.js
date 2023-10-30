import React, { Fragment } from "react";
import MainHeader from "./mainComponents/MainHeader";
import ContentStack from "./mainComponents/ContentStack";
import MainBody from "./mainComponents/MainBody";
import CardWhyIT from "./mainComponents/CardWhyIT";
import Slider from "./mainComponents/Slider";
import CardAboutMe from "./mainComponents/CardAboutMe";
import CardMyProject from "./mainComponents/CardMyProject";
import Contacts from "./mainComponents/Contacts";

function Main() {
  return (
    <Fragment>
      <MainHeader />
      <ContentStack />
      <MainBody />
      <CardMyProject />
      <Contacts />
      <CardAboutMe />
      <Slider />
      <CardWhyIT />
    </Fragment>
  );
}

export default Main;
