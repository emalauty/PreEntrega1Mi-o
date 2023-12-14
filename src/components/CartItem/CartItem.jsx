import React from 'react';
import {imgcart} from "../CartItem/cartitem.module.css"



const CartItem = ({ price, name, quantity, img}) => (

  <div className='cart-item'>
    <img className={imgcart} src={img} alt='item' />
    <div className='item-details'>
      <span className='name'>{name} </span>
      <span className='price'>
        cantidad: {quantity} precio: ${price}
      </span>
    </div>
  </div>
);

export default CartItem;