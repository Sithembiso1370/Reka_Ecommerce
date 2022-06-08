import React from 'react'
import './StoreFilture.css'
// import './Functions.js'




function StoreFilture() {
  return (
    <div className='StoreFilture'>
        <div className='Storfilture_head'>StoreFilture</div>
         {/* Control buttons  */}

         <div className='my_filture'>
            <div id="myBtnContainer">
                <button class="btn active" onClick="filterSelection('all')"> Show all</button>
                <button class="btn" onClick="filterSelection('cars')"> Cars</button>
                <button class="btn" onClick="filterSelection('animals')"> Animals</button>
                <button class="btn" onClick="filterSelection('fruits')"> Fruits</button>
                <button class="btn" onClick="filterSelection('colors')"> Colors</button>
            </div>

            {/* <!-- The filterable elements. Note that some have multiple class names (this can be used if they belong to multiple categories) --> */}
            <div class="container">
                <div class="filterDiv cars">BMW</div>
                <div class="filterDiv colors fruits">Orange</div>
                <div class="filterDiv cars">Volvo</div>
                <div class="filterDiv colors">Red</div>
                <div class="filterDiv cars animals">Mustang</div>
                <div class="filterDiv colors">Blue</div>
                <div class="filterDiv animals">Cat</div>
                <div class="filterDiv animals">Dog</div>
                <div class="filterDiv fruits">Melon</div>
                <div class="filterDiv fruits animals">Kiwi</div>
                <div class="filterDiv fruits">Banana</div>
                <div class="filterDiv fruits">Lemon</div>
                <div class="filterDiv animals">Cow</div>
            </div>
         </div>

    </div>
  )
}

export default StoreFilture