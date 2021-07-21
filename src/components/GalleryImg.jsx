import React from 'react'
import "../stylesheets/Gallery.css"

const GalleryImg = (props) => {
    
        return (
            <img className="gallery__image" src={props.imgSrc} alt={props.imgAlt}/>
        )
}

export default GalleryImg