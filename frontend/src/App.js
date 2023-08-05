import './App.css';

import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import Navbar  from './components/Navbar';
import cart from './components/cart';
import Home from './components/home';
import Notfound from './components/Notfound';
function App() {
  return <div className='App'>
    <BrowserRouter>
    <ToastContainer/>
    <Navbar />
      <Routes>
        <Route path='/cart' Component={cart} />
        <Route path='/not-found'  Component={Notfound} />
        <Route path='/' exact Component={Home} />
        <Route path="*" element={<Navigate to="not-found"/>} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
