import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './Pages/LandingPage/LandingPage';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/AboutPage/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import CartPage from './Pages/CartPage/CartPage';
import MessagesPage from './Pages/MessagesPage/MessagesPage';
import OrdersPage from './Pages/OrdersPage/OrdersPage';
import AccountPage from './Pages/AccountPage/AccountPage';
import StoreDepartmentPage from './Pages/StoreDepartmentPage/StoreDepartmentPage';
import MensClothing from './Pages/Departments/MensClothing';
import Store from './Pages/Store/Store';
import Department from './Pages/Department/Department';
import Wishlist from './Pages/WishlistPage/Wishlist';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* STANDARD LINKS  */}
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* STORE LINKS */}
        <Route path="/Store" element={<LandingPage />} />
        <Route path="/Store/:storeId" element={<Store />} />
        <Route path="/Store/Department" element={<Department />} />
        <Route path="/Store/Department/:departmentId" element={<Department />} />
        <Route path="/Store/ProductPage/:productId" element={<ProductPage />} />
        <Route path="/Store/CartPage" element={<CartPage />} />
        <Route path="/Store/MessagesPage" element={<MessagesPage />} />
        <Route path="/Store/OrdersPage" element={<OrdersPage />} />
        <Route path="/Store/AccountPage" element={<AccountPage />} />
        <Route path="/Store/MensClothing" element={<MensClothing />} />
        <Route path="/Store/Wishlist" element={<Wishlist />} />
        
          {/* NEST THESE ROUTES */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

