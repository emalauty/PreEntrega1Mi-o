import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductosById } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {
    const [productos, setProductos] = useState(null);
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams();

useEffect(() =>{
    setLoading(true);
    getProductosById(itemId)
        .then((response) =>{
            setProductos(response);
        })
        .catch((error) => console.error(error))
        .finally(() =>{
            setLoading(false);
        });
}, [itemId]);
  return (
    <>
        {loading ? (
            <h2>Cargando el detalle del producto...</h2>
        ) : (
            productos && <ItemDetail {...productos} />
        )}
    </>
  )
}
