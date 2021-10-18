import './App.css';
import Basket from './Basket'
import {useDispatch} from 'react-redux'
import {updateProduct} from './Redux/Actions'
import uniqid from 'uniqid';
import Navbar from './LightDarkNavbar/NavBar'
import Dark from './LightDarkNavbar/LighDarkComponent'

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
  const [darkMode] = Dark()
  function AddEntries() {
   return  <button className={darkMode ? "dark-btn" : ''} type="button" onClick={() => handleAddProduct()}>Add entry</button>
  }
  const handleAddProduct = () => {
    dispatch(updateProduct(randomProducts()))
  }
  return (
    <div className="App">
      <Navbar />
      <div className="basket">
        <Basket darkMode={darkMode}/>
      </div>
      <div className="add-entry">
      <AddEntries />
      </div>
    </div>
  );
}

export default App;
