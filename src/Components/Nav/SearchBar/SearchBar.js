import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.css'
import SelectCustStyles from '../SelectCustStyles'
import SelectAutoWidth from '../SelectCustStyles'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './SearchBar.css'

function SearchBar() {
  return (
        <div className='search_bar'>
            <select    className="search_select" >
              <option>Clothing</option>
              <option>Ellectronics</option>
              <option>Toys</option>
              <option>Clothing</option>
              <option>Ellectronics</option>
              <option>Toys</option>
            </select>
            <input type="text" className="search_textfeald" placeholder='Search Over 1 Million products you love'/>
            <button  className="search_btn" size='small'>
              <i className='fa fa-search fa-lg'></i>
            </button >
        </div>
  )
}

export default SearchBar




// <div className='search_bar'>
// <Button variant="outlined" color="error"  className="search_btn" size='large'>
//   <i className='fa fa-search '></i>
// </Button>
// <TextField id="filled-basic" label="Filled" variant="filled" className="search_textfeald" size='small'/>
// <SelectAutoWidth    className="search_select" size='small'/>
// </div>
