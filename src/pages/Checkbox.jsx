import React, { useState } from 'react'

const Checkbox = ({item,handleFilter}) => {

    
    
    console.log(item)
    return (
      <div>
        <input type="checkbox" name={item.name} value={item._id} onChange={(e)=> handleFilter(e.target.name,e.target.value)} />
        <label htmlFor="" name={item.name}>
          {item.name}
        </label>
      </div>
    );
}

export default Checkbox