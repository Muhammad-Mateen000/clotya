import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Cart from './Cart.jsx';
import store from './store/store.jsx';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route> 
      <Route path="/cart" element={<Cart/>}></Route> 
    </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
);
