import React, { Component } from "react";

import "../stylesheets/Form.css";

export default class Form extends Component {
  formSubmit(event) {
    // if (document.getElementsByClassName('form__select')[0].value === "Default") {
    //     console.log('bbeep')
    //     event.preventDefault()

    // }
    alert("The form was submitted");
    event.preventDefault();
  }

  render() {
    return (
      <>
        <p>Form title</p>
        <form onSubmit={this.formSubmit} className="form">
          <div className="form__input__wrapper">
            <input
              required
              className="form__input"
              placeholder="First name"
              type="text"
              name="firstName"
            />
            <input
              required
              className="form__input"
              placeholder="Last name"
              type="text"
              name="lastName"
            />
            <input
              required
              className="form__input"
              placeholder="Email address"
              type="email"
              name="email"
            />
          <select className="form__input form__select" name="city" required>
            <option value="Default" disabled selected>
              City
            </option>
            <option value="Auckland">Auckland</option>
            <option value="Wellington">Wellington</option>
            <option value="Hamilton">Hamilton</option>
            <option value="Christchurch">Christchurch</option>
          </select>
          </div>
          <button type="submit" className="form__submit-btn">
            Submit
          </button>
        </form>
      </>
    );
  }
}
