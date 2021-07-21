import React, { Component } from "react";

import "../stylesheets/Gallery.css";
import GalleryImg from "./GalleryImg";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";

export default class GalleryWrapper extends Component {
  render() {
    return (
      <section className="gallery">
        <GalleryImg imgSrc={image3} imgAlt={'A landscape of glaciers and a lake.'}/>
        <GalleryImg imgSrc={image4} imgAlt={'A landscape of a small lake on top of a mountain.'}/>
        <GalleryImg imgSrc={image5} imgAlt={'The tide coming in at a beach at dusk or dawn.'}/>
        <GalleryImg imgSrc={image6} imgAlt={'Landscape photo of the sunset.'}/>
        <GalleryImg imgSrc={image1} imgAlt={'Landscape of mountain tops captured late at night.'}/>
        <GalleryImg imgSrc={image2} imgAlt={'Portrait of palm trees infront of a sunset.'}/>
      </section>
    );
  }
}
