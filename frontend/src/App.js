import './App.css';

import {BrowserRouter, Route, Routes,} from "react-router-dom"
import Navbar  from './components/Navbar';
import cart from './components/cart';
import Home from './components/home';
function App() {
  return <div className='App'>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/cart' Component={cart} />
        <Route path='/' Component={Home} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
