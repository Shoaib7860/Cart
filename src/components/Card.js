import React from 'react'
import "./card.css"

function Card( {item, handleCount}) {
    const {title,img,price,author} = item;
  return (
    <>
    <div className='cards'>
        <div className='image_box'>
            <img src={img} alt='image'/>

        </div>
        <div className='details'>
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}</p>
            <button onClick={() => handleCount(item)}>Add to cart</button>
        </div>
    </div>
    </>
  )
}

export default Card