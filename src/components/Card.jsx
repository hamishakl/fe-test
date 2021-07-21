import React from 'react'
import "../stylesheets/Card.css"

const Card = (props) => {
    
        return (
            <div className="card">
                <div className="card__img-div" alt="" id={props.imgId}></div>
                <h4 className="card__heading">{props.heading}</h4>
                <p className="card__description">{props.description}</p>
                <a className="card__link" href={props.aTagHref} target="_blank" rel="noreferrer">{props.aTagContent}</a>
            </div>
        )
}

export default Card