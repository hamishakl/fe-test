import React, { Component } from 'react'
import Facebook from './svg/Facebook'
import Instagram from './svg/Instagram'
import Youtube from './svg/Youtube'

import "../stylesheets/Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <h5 className="footer__heading">Main Office</h5>
                <p className="footer__text">6235 Thalia Terrace Apt. 695</p>
                <p className="footer__text">Frederikfurt</p>
                <p className="footer__text">Jamaica</p>
                <h5 className="footer__heading">Contact</h5>
                <p className="footer__text">735-421-6378</p>
                <a href="mailto:myname@gmail.com">myname@gmail.com</a>
                <div className="footer__social__wrapper">
                    <Facebook />
                    <Instagram />
                    <Youtube />
                </div>
                <p className="footer__text">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </footer>
        )
    }
}
