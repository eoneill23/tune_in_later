import React from 'react'
import './Card.css'

const Card = ({id, key, title, price, img}) => {
    return (
        <article className="Card">
            <img src={img} alt=""/>
            <h2>{title}</h2>
            <p>{price}</p>
        </article>
    )
}

export default Card
