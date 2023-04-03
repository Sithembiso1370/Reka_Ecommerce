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
import Department from './Pages/Department/Department';
import Wishlist from './Pages/WishlistPage/Wishlist';
import Store from './Pages/Sale/Store'
import Inventory from './Pages/Inventory/Inventory';
import Departments from './Pages/Departments/Departments';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        {/* ALL ROUTES BEING DECLAIRED FOR ALL NAVIGATION */}
        {/* Main Routes */}
         {/* Super Store Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Stores/:storeId" element={<Store />} />
        <Route path="/Stores" element={<Store />} />
        <Route path="/Store/Departments" element={<Departments />} >
          <Route path="Groceries" element={<Department />} />
        </Route>
        <Route path="/Store/Departments/:departmentId" element={<Department />} /> 
        {/* Need to add department sub-routes here to enable topographic routing and abillity to
        to pass another parameter as e.g. path="/Store/Departments/MensClothing/:ProductId"
        */}
        {/* STANDARD LINKS  */}

        {/* ALL TOP NAVIGATION LINKS  */}
        <Route path="/Store/CartPage" element={<CartPage />} />
        <Route path="/Store/MessagesPage" element={<MessagesPage />} />
        <Route path="/Store/OrdersPage" element={<OrdersPage />} />
        <Route path="/Store/AccountPage" element={<AccountPage />} />
        {/* <Route path="/Store/MensClothing" element={<MensClothing />} /> */}
        <Route path="/Store/Wishlist" element={<Wishlist />} />
        {/* STORE LINKS - remember to correct to stores and store page*/}
        {/* STORE PAGE */}
        <Route path="/Store/Inventory" element={<Inventory />} /> 
        <Route path="/Store/Inventory/:departmentId" element={<Department />} />
        <Route path="/Store/Product/:productId" element={<ProductPage />} />
        
        
        {/* ALL ROUTE LINKS FOR ALL PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<ContactUs />} />
        <Route path="/returnPolicy" element={<ContactUs />} />
        <Route path="/careers" element={<ContactUs />} />
        <Route path="/siteMap" element={<ContactUs />} />

        



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