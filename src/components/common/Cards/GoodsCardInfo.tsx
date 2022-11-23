import React from 'react'

interface IGoodsCardProps {
  size: string;
  price: string;
  weight: string;
}

export const GoodsCardInfo = ({ size, price, weight}: IGoodsCardProps): JSX.Element => {
  return (
    <div>
    <span>
      {size}
    </span>
      <div>
        <span>{price}</span>
        <button>
          В Корзину
        </button>
      </div>
      <span>
        {weight}
      </span>
    </div>
  )
}
