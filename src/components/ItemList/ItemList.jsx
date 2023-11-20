
import Item from '../Item/Item';

export default function ItemList() {
  return (
    <div className='ListGroup'>
        {products.map((products) => (
            <Item key={products.id} {...products}/>
        ))}
    </div>
  );
}
