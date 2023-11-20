import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({
    id,
    name,
    img,
    price,
    stock,
    description,
}
    
) {
  return (
    <article className='itemcard'>
        <header className='itemheader'>
            <h2>{name}</h2>
            <p>{description}</p>
        </header>
        <picture>
            <img src={img} alt={name} className='itemimg' />
        </picture>
        <section>
            <p className='pinfo'> Precio ${price}</p>
            <p className='pinfo'> Stock {stock}</p>
        </section>
        <footer className='itemfooter'>
            <ItemCount
                initial={1}
                stock={10}
                onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
            />
        </footer>
    </article>
  );
}
