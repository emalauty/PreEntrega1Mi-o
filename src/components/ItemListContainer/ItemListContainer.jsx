import { hola } from "./itemlistcontainer.module.css";

export default function ItemListContainer({count, setCount}) {
    return (
      <>
        <h1 className={hola}>Añadir al carrito</h1>
        <button onClick={() => setCount(count-1)}> - </button>
        <button onClick={() => setCount(count+1)}> + </button>
        
      </>
    );
  }
 