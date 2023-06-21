import React, { useEffect, useState } from 'react'
import "./cart.css"

function Cart({data, setData, handleChange}) {
    const [price,setPrice]= useState(0);

    const handlePrice = () => {
        let ans = 0;
        data.map((item) =>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleDelete = (id) => {
        const arr = data.filter((item) => item.id !== id)
        setData(arr);
         
    }

    useEffect(() => {
        handlePrice();

    })

  return (
    <>
    <article>
        {
            data.map((item) => (
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item, +1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleDelete(item.id)}>Remove</button>
                    </div>
                </div>

            ))
        }
        <div className='total'>
            <span>Total Price of your cart</span>
            <span>Rs - {price}</span>
        </div>
    </article>
    </>
  )
}

export default Cart