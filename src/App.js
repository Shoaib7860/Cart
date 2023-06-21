import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Amazon from "./components/Amazon";
import "../src/components/warning.css"

function App() {

  const [show,setShow] = useState(true);
  const [data,setData] = useState([]);
  const [warning,setWarning] = useState(false);


  const handleCount = (item) => {
    let isPresent = false;
    data.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
    setWarning(true);
    setTimeout(() => {
      setWarning(false)
    },2000)
    return;
  }
    setData([...data, item]);

  }
  const handleChange = (item,d) => {
    let ind = -1;
    data.forEach((da, index) => {
      if (da.id === item.id)
      ind = index;
    });
    const tempArr = data;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0 )
    tempArr[ind].amount = 1;
    setData([...tempArr])

  }



   return (
    <>
    <Navbar size={data.length} setShow={setShow}/>
{
  show ? <Amazon handleCount={handleCount} /> : <Cart data={data} setData={setData} handleChange={handleChange} />
}
   
    
    {
      warning && <div className="warning"><p>item is already added in  your cart</p></div>
    }

    </>
  );
}

export default App;
