import './App.css';

import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar  from './components/Navbar';
import Cart from './components/cart';
import Home from './components/home';
import Notfound from './components/Notfound';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
function App() {
  return <div className='App'>
    <BrowserRouter>
    <ToastContainer/>
    <Navbar />
      <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/not-found'  element={<Notfound/>} />
        <Route path='/' exact element={<Home/>} />
        <Route to="not-found" />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
