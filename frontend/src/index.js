import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import  productsReducer, {productsFetch} from './slices/productSlices'
import { productsApi } from './slices/productsApi';
import cartReducer, {getTotals} from './slices/cartSlice';
import authReducer, { loadUser } from './slices/authSlices';
import userSlice from './slices/userSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    users: userSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  
});
 store.dispatch(productsFetch());
 store.dispatch(getTotals());
 store.dispatch(loadUser(null));
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

