import {productos} from "../ItemList/itemlist.module.css"
import {container} from "../ItemList/itemlist.module.css"
import Item from '../Item/Item';

export default function ItemList({products}) {
  return (
    <div className={container}>
    <div className={productos}>
        {products.map((productos) => (
            <Item key={productos.id} {...productos}/>
        ))}
    </div>
    </div>
  );
}
