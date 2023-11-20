
import { useEffect, useState } from "react";
import { getProductos, getProductosByCategoria } from "../../asyncmock";
import { hola } from "./itemlistcontainer.module.css";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({ count, setCount, greeting }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    const asynFunc = categoryId ? getProductosByCategoria : getProductos;

    useEffect(() =>{
      setLoading(true);

    asynFunc(categoryId)
    .then((response) =>{
      setProductos(response);
    })
    .catch((error) => console.error(error))
    .finally(() =>{
      setLoading(false);
    });
    }, [categoryId]);
    return (
      <>
      <h2>{greeting}</h2>
      {loading ? <h2>Cargando...</h2> : <ItemList products={productos}/>}
        
      </>
    );
  }
 