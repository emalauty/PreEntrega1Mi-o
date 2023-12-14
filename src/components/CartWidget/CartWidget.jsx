import { useContext } from "react";
import { carritoCount } from "./cartwidget.module.css";
import { hola } from "./cartwidget.module.css";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


const CartWidget = () =>{
  const {cantidadEnCarrito} = useContext(CartContext)
  
  return(
    <Link to="/cart" className="CartWidget">
      <span className={hola}>
          🛒
          </span>           
          <span className={carritoCount}>{cantidadEnCarrito()}</span>
    </Link>
  )
}
  
    
export default CartWidget
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
