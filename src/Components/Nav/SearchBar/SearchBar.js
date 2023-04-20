import React from 'react'
import './SearchBar.css'
import './SearchBar.css'

function SearchBar() {
  return (
        <div className='search_bar'>
            <select className="search_select">
              <option>All</option>
              <option>womens Clothing</option>
              <option>mens Clothing</option>
              <option>Kids Clothing</option>
              <option>Bags,Hats, Belts and Shoes</option>
              <option>Stationary</option>
              <option>Phones, Telecoms and Accesories</option>
              <option>Computer and Office</option>
              <option>Consumer Electronics</option>
              <option>Industrial Electronics</option>
              <option>Home, Pet and Supplies</option>
              <option>Home Deco & Tools</option>
              <option>Outdoors Deco & Tools</option>
              <option>Toys, Kids and Babies</option>
              <option>Jewelery, Watchies and Accesories</option>
              <option>Beauty, Health and Hair</option>
              <option>Automative Parts</option>
              <option>Games & Puzzles</option>
              <option>Automation -  Home | Industrial</option>
              <option>Software -  Home | Industrial</option>
            </select>
            <input type="text" className="search_textfeald" placeholder='Search Over 1 Million products you love,or Add New Product Request'/>
            <button  className="search_btn" size='small'>
              <i className='fa fa-search fa-lg'></i>
            </button >
        </div>
  )
}

export default SearchBar




