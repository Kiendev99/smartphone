import './App.css';

import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import Navbar  from './components/Navbar';
import cart from './components/cart';
import Home from './components/home';
import Notfound from './components/Notfound';
function App() {
  return <div className='App'>
    <BrowserRouter>
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
