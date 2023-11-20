import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/Navbar/Navbar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";



export default function RutaPrincipal() {
  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element= {<ItemListContainer/>}>  </Route>
                <Route path="/category/:categoryId" element= {<ItemListContainer/>}>  </Route>
                <Route path="/item/:itemId" element= {<ItemDetailContainer/>}>  </Route>
                <Route path="*" element= {<h1>ERROR 404 NOT FOUND</h1>}>  </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
