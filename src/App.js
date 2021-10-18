import './App.css';
import Basket from './Basket'
import {useDispatch, useSelector} from 'react-redux'
import {updateProduct} from './Redux/Actions'
import uniqid from 'uniqid';
import Navbar from './LightDarkNavbar/NavBar'
import { useEffect, useState } from 'react';

// Initialize random product names
const items = ["Book", "Game", "TV", "Tablet", "Cellphone","Computer", "Camera", "Recorder", "Screen"]

// function to generate random products
const randomProducts = () =>  {
let ranProduct = 
  {
    // id: Math.floor(Math.random()*Math.random()*100), 
    id: uniqid(),
    item: items[Math.floor(Math.random()*items.length)],
    price: Math.floor(Math.random()*100),
  }

return ranProduct
}



function App() {

  const dispatch = useDispatch()
  const {dark} = useSelector((state) => state.product)
  console.log(dark);
  useEffect(() => {
  }, [dark])
  // const darkMode = Dark()
  function AddEntries() {
   return  <button className={!dark ? 'dark-button' : ''} type="button" onClick={() => handleAddProduct()}>Add entry</button>
  }
  const handleAddProduct = () => {
    dispatch(updateProduct(randomProducts()))
  }
  console.log(dark);
  return (
    <div className="App">
      <Navbar />
      <div className="basket">
        <Basket />
      </div>
      <div className="add-entry">
      <AddEntries />
      </div>
    </div>
  );
}

export default App;
