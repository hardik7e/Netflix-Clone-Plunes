import React from 'react'
import './Card.css';

function Card({image}) {
    return (
        <div className="card">
            <img className="card_image" src={image} alt="" srcset=""/>
        </div>
    )
}

export default Card
