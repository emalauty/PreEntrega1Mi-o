
import { useEffect, useState } from "react";
import { hola } from "./itemlistcontainer.module.css";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/client";


const ItemListContainer = ({greeting}) => {
    const [products, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();
    

    useEffect(() =>{
      const productosRef = collection(db, "productos");

      const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef;

      getDocs(q)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
}, [categoryId])


return (
  <>
  <h2>{greeting}</h2>
  <ItemList products={products}/>
    
  </>
);
}
  

 export default ItemListContainer