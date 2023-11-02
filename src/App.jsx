import { useState } from 'react'
import './App.css'
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



  function App() {
    const [count, setCount] = useState(0);
    

  return (
    <>
      
      <NavBar count={count}/>
      <ItemListContainer count={count} setCount={setCount}/>

      
 
    </>
  )
}

export default App
