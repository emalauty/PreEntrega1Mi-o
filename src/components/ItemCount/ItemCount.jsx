import './itemcount.module.css';
import { useState } from 'react';

const ItemCount = ({item, stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < item.stock)
            setQuantity(quantity + 1)
    }


    const decrement = () => {
        if (quantity > 1)
            setQuantity(quantity - 1)
    }


    return (
        <div>
            <div className='boton'>
                <button onClick={decrement}>-</button>
                <h4 className='h4' >{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>

                <button onClick={() => onAdd(quantity)} disabled={!item.stock}>
                    Agregar al carrito
                </button>
            </div>
        </div >
    )
}

export default ItemCount