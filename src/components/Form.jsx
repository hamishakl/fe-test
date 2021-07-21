import React, { Component } from 'react'

export default class Form extends Component {

    formSubmit(event) {
        alert('The form was submitted')
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.formSubmit} className="form">
                Form title
                <input className="form__input" placeholder="First name" type="text" name="firstName"/>
                <input className="form__input" placeholder="Last name" type="text" name="lastName" />
                <input className="form__input" placeholder="Email address" type="email" name="email" />
                <select className="form__input form__select" name="city">
                    <option value="Auckland">Auckland</option>
                    <option value="Wellington">Wellington</option>
                    <option value="Hamilton">Hamilton</option>
                    <option value="Christchurch">Christchurch</option>
                </select>
                <button type="submit" className="form__submit-btn">Submit</button>
            </form>
        )
    }
}
