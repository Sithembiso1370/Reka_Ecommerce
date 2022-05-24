import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './rounded15px.css'

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div >
      <FormControl sx={{  minWidth: 80, minHeight: 10}} variant="filled" size='small' >
        <InputLabel id="demo-simple-select-autowidth-label" >All</InputLabel>
        <Select
        // className='rounded_15px'
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="" className='rounded_15px'>
            <em>All</em>
          </MenuItem>
          <MenuItem value={10} className='rounded_15px'>Twenty</MenuItem>
          <MenuItem value={21} className='rounded_15px'>Twenty one</MenuItem>
          <MenuItem value={22} className='rounded_15px'>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
