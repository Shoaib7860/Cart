import React from 'react'
import Data from "./Data"
import "./amazon.css"
import Card from './Card'

function Amazon({handleCount}) {
  return (
    <>
    <section>
        {
            Data.map((item) => (
                <Card item={item} handleCount={handleCount} key={item.id} />
            ))
        }
    </section>

    </>
  )
}

export default Amazon