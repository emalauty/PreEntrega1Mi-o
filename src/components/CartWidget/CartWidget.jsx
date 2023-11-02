import { carritoCount } from "./cartwidget.module.css";
import { hola } from "./cartwidget.module.css";
export default function CartWidget({count}) {
    return (
      <>
      
          <a href="" className={hola}>
          🛒
          </a>           
          <span className={carritoCount}>{count}</span>
         
      </>
    );
  }