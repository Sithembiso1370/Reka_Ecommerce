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
        {/* ALL ROUTES BEING DECLAIRED FOR ALL NAVIGATION */}
        <Route path="/" element={<LandingPage />} />
        {/* STANDARD LINKS  */}

        {/* ALL TOP NAVIGATION LINKS  */}
        <Route path="/Store/CartPage" element={<CartPage />} />
        <Route path="/Store/MessagesPage" element={<MessagesPage />} />
        <Route path="/Store/OrdersPage" element={<OrdersPage />} />
        <Route path="/Store/AccountPage" element={<AccountPage />} />
        {/* <Route path="/Store/MensClothing" element={<MensClothing />} /> */}
        <Route path="/Store/Wishlist" element={<Wishlist />} />
        
        {/* ALL ROUTE LINKS FOR ALL PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<ContactUs />} />
        <Route path="/returnPolicy" element={<ContactUs />} />
        <Route path="/careers" element={<ContactUs />} />
        <Route path="/siteMap" element={<ContactUs />} />

        

        {/* STORE LINKS - remember to correct to stores and store page*/}
        <Route path="/Store" element={<LandingPage />} />
        <Route path="/Stores" element={<LandingPage />} /> 
        {/* STORE PAGE */}
        <Route path="/Store/:storeId" element={<Store />} />
        <Route path="/Store/Department" element={<LandingPage  />} >
          <Route path="WomensClothing" element={<MensClothing />} />
          <Route path="Jewelery" element={<MensClothing />} />
          <Route path="Watches&Accesories" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
          <Route path="WomensClothing" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
          <Route path="WomensClothing" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
          <Route path="WomensClothing" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
          <Route path="WomensClothing" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
          <Route path="WomensClothing" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
          <Route path="WomensClothing" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
          <Route path="WomensClothing" element={<MensClothing />} />
          <Route path="MensClothing" element={<MensClothing />} />
        </Route>



        <Route path="/Store/ProductPage/:productId" element={<ProductPage />} />

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

// http://localhost:3000/Store/ProductPage/15