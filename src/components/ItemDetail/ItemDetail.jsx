import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

export default function ItemDetail({
    id,
    name,
    img,
    price,
    stock,
    description,
    item
    
    
}

) 

{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handdleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    

    addItem(item, quantity)
}

  return (
    <article className='itemcard'>
        <header className='itemheader'>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </header>
        <picture>
            <img src={item.img} alt={item.name} className='itemimg' />
        </picture>
        <section>
            <p className='pinfo'> Precio ${item.price}</p>
            <p className='pinfo'> Stock {item.stock}</p>
        </section>
        <footer className='itemfooter'>
            {
                quantityAdded > 0 ? (
                    <Link to="/cart" className='Option'>Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} item={item} stock={stock} onAdd={handdleOnAdd}></ItemCount>
                )
            }
        </footer>
    </article>
  );
}
