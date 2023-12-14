import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () =>{
    const {cart, clearCart, totalQuantity} = useContext(CartContext)
    
    if(totalQuantity === 0){
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    }

    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total : $ {total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to="/checkout" className="option">Checkout</Link>
        </div>

    )
}

export default Cart