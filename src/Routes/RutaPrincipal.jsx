import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/Navbar/Navbar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import { CartProvider } from "../context/cartContext";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";



export default function RutaPrincipal() {
  const [count, setCount] = useState(0);
  return (
    <>
        <BrowserRouter>
          <CartProvider>
            <NavBar count={count}/>
            <Routes>
                <Route path="/" element= {<ItemListContainer/>}>  </Route>
                <Route path="/category/:categoryId" element= {<ItemListContainer/>}>  </Route>
                <Route path="/item/:itemId" element= {<ItemDetailContainer count={count} setCount={setCount}/>}>  </Route>
                <Route path="/cart" element= {<Cart/>}></Route>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="*" element= {<h1>ERROR 404 NOT FOUND</h1>}>  </Route>
            </Routes>
            </CartProvider>
        </BrowserRouter>
    </>
  )
}
