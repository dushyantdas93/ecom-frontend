import React from 'react'

const ProductCard = ({item}) => {
  return (
      <div className="size-80 border">
          <img src={item.photo} alt="" />
          name:{item.name}
    </div>
  )
}

export default ProductCard