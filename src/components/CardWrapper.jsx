import React, { Component } from "react";
import Card from "./Card";

import "../stylesheets/Card.css"

export default class CardWrapper extends Component {
  render() {
    return (
      <section className="wrapper card__wrapper">
        <Card
          imgId={"image1"}
          imgAria={"A landscape of mountain tops at sunset."}
          heading={"Pink & Purple Sunset"}
          description={
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper."
          }
          aTagHref={"https://hamishhenare.com"}
          aTagContent={"Go to the sunset"}
        ></Card>
        <Card
          imgId={"image2"}
          imgAria={'Portrait of palm trees with a bright pink and peach sunset in the background.'}
          heading={"Sublime Trees"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet…"
          }
          aTagHref={"https://hamishhenare.com"}
          aTagContent={"View some more"}
        ></Card>
      </section>
    );
  }
}
