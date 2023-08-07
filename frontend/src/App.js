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
import Dashboard from './components/admin/Dashboard';
import Products from './components/admin/Products'
import Summary from './components/admin/Summary';
import CreateProduct from './components/admin/CreateProduct'
import ProductsList from './components/admin/list/ProductsList';
import Users from './components/admin/Users';
import Product from './components/Details/Product';
import UserProfile from './components/Details/UserProfile';
function App() {
  return <div className='App'>
    <BrowserRouter>
    <ToastContainer/>
    <Navbar />
      <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/admin" element={<Dashboard />}>
            <Route path="products" element={<Products />} >
            <Route index element={<ProductsList />} />
            <Route path="create-product" element={<CreateProduct />} />
            </Route>
            <Route path="summary" element={<Summary />} />
            <Route path="users" element={<Users />} />
        </Route>
        <Route path='/not-found'  element={<Notfound/>} />
        <Route path='/' exact element={<Home/>} />
        <Route to="not-found" />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
