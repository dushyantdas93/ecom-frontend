import React, { useState } from 'react'
import { price } from '../conponents/Price.js'


const Radio = ({handleRadio}) => {
    const [pricevalue ,setPricevalue] = useState('')
    const handleChange = (e) => {
       
        console.log("this is click", e.target.value);
        setPricevalue(e.target.value);
        handleRadio(pricevalue)
    }
    // console.log(pricevalue)
  return (
      <div>
          <form action="" className=''>
              {price?.map((item, idx) => {
                  return (
                    <div key={idx}>
                          <input type="radio" name="price" value={item._id} onChange={(e) => {
                            //   console.log("this is click", e.target.value)
                              handleChange(e)
                          }} />
                          <label htmlFor="">{item.name}</label>
                    </div>
                  );
              })}
         </form>
    </div>
  )
}

export default Radio