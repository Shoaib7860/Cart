import React from 'react'
import "./navbar.css"

function Navbar({size,setShow}) {
  return (
    <>
    <nav>
        <div className="nav_box">
            <span className='my_shop' onClick={() => setShow(true)}>
                My Shopping
                </span>
                <div className='cart'>
                    <span>
                        <i className='fas fa-cart-plus' onClick={() => setShow(false)}></i>
                    </span>
                    <span className='spancount'>{size}</span>
                </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar