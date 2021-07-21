import React from "react";

import "./App.css";
import "./stylesheets/reset.css";

import Form from "./components/Form";
import HeadingText from "./components/HeadingText";
import Divider from "./components/Divider";
import Card from "./components/Card";
import GalleryImg from "./components/GalleryImg";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";

function App() {
  return (
    <>
      <div className="wrapper form__wrapper">
        <HeadingText />
        <Form />
      </div>
      <Divider />
      <div className="wrapper card__wrapper">
        <Card
          imgId={"image1"}
          heading={"Pink & Purple Sunset"}
          description={
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper."
          }
          aTagHref={"https://hamishhenare.com"}
          aTagContent={"Go to the sunset"}
        ></Card>
        <Card
          imgId={"image2"}
          heading={"Sublime Trees"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet…"
          }
          aTagHref={"https://hamishhenare.com"}
          aTagContent={"View some more"}
        ></Card>
      </div>
      <div className="gallery">
        <GalleryImg imgSrc={image3} />
        <GalleryImg imgSrc={image4} />
        <GalleryImg imgSrc={image5} />
        <GalleryImg imgSrc={image6} />
        <GalleryImg imgSrc={image1} />
        <GalleryImg imgSrc={image2} />
      </div>
    </>
  );
}

export default App;
