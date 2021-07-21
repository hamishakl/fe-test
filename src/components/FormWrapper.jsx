import React, { Component } from 'react'
import Divider from './Divider'
import Form from './Form'
import '../stylesheets/Form.css'

export default class FormWrapper extends Component {
    render() {
        return (
            <section className="wrapper form__wrapper">
                <Form />
                <Divider />
            </section>
        )
    }
}
