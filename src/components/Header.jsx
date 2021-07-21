import React, { Component } from 'react'
import HeadingText from './HeadingText'

export default class Header extends Component {
    render() {
        return (
            <header className="heading">
                <HeadingText/>
            </header>
        )
    }
}
