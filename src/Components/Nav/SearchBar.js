import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.css'
import SelectCustStyles from './SelectCustStyles'
import SelectAutoWidth from './SelectCustStyles'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './SearchBar.css'

function SearchBar() {
  return (
        <div className='search_bar'>
          <Button variant="filled" color="error"  className="search_btn" size='small'>
            <i className='fa fa-search fa-lg'></i>
          </Button>
          <TextField id="filled-basic" label="Filled" variant="filled" className="search_textfeald" size='small'/>
          <SelectAutoWidth    className="search_select" size='small'/>
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