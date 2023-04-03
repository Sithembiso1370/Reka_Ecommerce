import React from 'react'

function AnotherFiltureTop() {
  return (
    <div className='AnotherFiltureTop'>
        <div className='AnotherFiltureTopHeader'>Label</div>
        <div className='AnotherFiltureTopSlider'>
        <label >Price</label>
        <input type="range" min="1" max="100"  class="Filtureslider" id="myRange" name='myRange'/>
        </div>
  </div>
  )
}

export default AnotherFiltureTop