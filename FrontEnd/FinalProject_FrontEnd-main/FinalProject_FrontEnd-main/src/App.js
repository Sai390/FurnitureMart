import logo from './logo.svg';
import './App.css';
import Background from './bg';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutUs from './AboutUs';
import Login from './login';
import Register from './register';
import HomePage from './HomePage';
import Cart from './Cart';
import Checkout from './checkout';

import {CartProvider} from 'react-use-cart'

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Routes >
        <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
