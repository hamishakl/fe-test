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
        <GalleryImg imgSrc={image3} />
        <GalleryImg imgSrc={image4} />
        <GalleryImg imgSrc={image5} />
        <GalleryImg imgSrc={image6} />
        <GalleryImg imgSrc={image1} />
        <GalleryImg imgSrc={image2} />
      </section>
    );
  }
}
