import React from "react";

import "./App.css";
import "./stylesheets/reset.css";

import Form from "./components/Form";
import HeadingText from "./components/HeadingText";
import Divider from "./components/Divider";
import Card from "./components/Card";


function App() {
  return (
    <>
      <div className="wrapper form__wrapper">
        <HeadingText />
        <Form />
      </div>
      <Divider />
      <div className="wrapper gallery__wrapper">
        <Card
          imgId={"image1"}
          heading={"Pink & Purple Sunset"}
          description={
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper."
          }
          aTagHref={'https://hamishhenare.com'}
          aTagContent={'Go to the sunset'}
        ></Card>
        <Card
          imgId={"image2"}
          heading={"Sublime Trees"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet…"
          }
          aTagHref={'https://hamishhenare.com'}
          aTagContent={'View some more'}
        ></Card>
      </div>
    </>
  );
}

export default App;
