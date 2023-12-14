import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";



const ItemDetailContainer = ({count, setCount}) => {
    
    const [item, setItem] = useState(null);
    const {itemId} = useParams();

    useEffect(() => {
        
        const docRef = doc(db, "productos", itemId);
        getDoc(docRef)
        .then((resp) => {
            setItem(
                {  ...resp.data(), id: resp.id  }
            );
        })
        
    }, [itemId])

    return (
        <>
           
            {item && <ItemDetail item={item} count={count} setCount={setCount}/>}
        
        </>
      )
}

export default ItemDetailContainer 