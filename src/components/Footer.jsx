import React, { Component } from "react";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import Youtube from "./svg/Youtube";

import "../stylesheets/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        
        <div className="footer__column footer__column--1">

        <div className="footer__text__wrapper">
          <h5 className="footer__heading">Main Office</h5>
          <p className="footer__text">6235 Thalia Terrace Apt. 695</p>
          <p className="footer__text">Frederikfurt</p>
          <p className="footer__text">Jamaica</p>
        </div>
        <div className="footer__text__wrapper">
          <h5 className="footer__heading">Contact</h5>
          <p className="footer__text">735-421-6378</p>
          <a className="footer__email" href="mailto:myname@gmail.com">myname@gmail.com</a>
        </div>
        </div>
        <div className="footer__column footer__column--2">

        <div className="footer__social__wrapper">
          <div className="footer__social__svg__wrapper">
            <Facebook />
          </div>
          <div className="footer__social__svg__wrapper">
            <Instagram />
          </div>
          <div className="footer__social__svg__wrapper">
            <Youtube />
          </div>
        </div>
        <p className="footer__text footer__outro">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh.
        </p>
        </div>
      </footer>
    );
  }
}
