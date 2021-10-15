import './App.css';
import Basket from './Basket'
import {useDispatch} from 'react-redux'
import {updateProduct} from './Redux/Actions'
import uniqid from 'uniqid';

// Initialize random product names
const items = ["Book", "Game", "TV", "Tablet", "Cellphone"]

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
  function AddEntries() {
   return  <button type="button" onClick={() => handleAddProduct()}>Add entry</button>
  }
  const handleAddProduct = () => {
    dispatch(updateProduct(randomProducts()))
  }
  return (
    <div className="App">
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
