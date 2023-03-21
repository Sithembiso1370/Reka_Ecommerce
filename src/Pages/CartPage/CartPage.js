import React from 'react'
import Footer from '../../Sections/Footer'
import Navbar from '../../Sections/Navbar'
import './CartPage.css'

function CartPage() {
  return (
    <div className="CartPage">
        <Navbar/>
        <div className='CheckoutProcessNavigator'>
            <span>left</span>
            <span>
              <button>1.Product(s)</button>
              <button>2. Cart</button>
              <button>3. Delivery Details and Payments Methods</button> 
              <button>4. Order Review</button>
            </span>
            <span>right</span>
        </div>
        <div className="CartPageMain">
          <div className='cartCenter'>
            <div className="CartItem morph_el">
                <img src="" alt="CartItem_Image"/>
                <div className='CartItem_details'>
                  <div className='CartItem_details_top'>
                    <h4>1/2 pcs M8/M10 RV Ship Bus</h4>
                    <input type="checkbox" id="itemId" name="itemName" value="itemValue"></input>
                  </div>
                  <div className='CartItem_details_body'>
                    <div>
                      <span>ZAR</span> 506.00
                    </div>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div>
                      <button>Checkout Item Only</button>
                      <button>Remove</button>
                    </div>
                    <span>Lead Times like wish/Promotion</span>
                  </div>
                </div>
            </div>
            <div className="CartItem morph_el">
                <img src="" alt="CartItem_Image"/>
                <div className='CartItem_details'>
                  <div className='CartItem_details_top'>
                    <h4>1/2 pcs M8/M10 RV Ship Bus</h4>
                    <input type="checkbox" id="itemId" name="itemName" value="itemValue"></input>
                  </div>
                  <div className='CartItem_details_body'>
                    <div>
                      <span>ZAR</span> 506.00
                    </div>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div>
                      <button>Checkout Item Only</button>
                      <button>Remove</button>
                    </div>
                    <span>Lead Times like wish/Promotion</span>
                  </div>
                </div>
            </div>
            <div className="CartItem morph_el">
                <img src="" alt="CartItem_Image"/>
                <div className='CartItem_details'>
                  <div className='CartItem_details_top'>
                    <h4>1/2 pcs M8/M10 RV Ship Bus</h4>
                    <input type="checkbox" id="itemId" name="itemName" value="itemValue"></input>
                  </div>
                  <div className='CartItem_details_body'>
                    <div>
                      <span>ZAR</span> 506.00
                    </div>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div>
                      <button>Checkout Item Only</button>
                      <button>Remove</button>
                    </div>
                    <span>Lead Times like wish/Promotion</span>
                  </div>
                </div>
            </div>
            <div className="CartItem morph_el">
                <img src="" alt="CartItem_Image"/>
                <div className='CartItem_details'>
                  <div className='CartItem_details_top'>
                    <h4>1/2 pcs M8/M10 RV Ship Bus</h4>
                    <input type="checkbox" id="itemId" name="itemName" value="itemValue"></input>
                  </div>
                  <div className='CartItem_details_body'>
                    <div>
                      <span>ZAR</span> 506.00
                    </div>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div>
                      <button>Checkout Item Only</button>
                      <button>Remove</button>
                    </div>
                    <span>Lead Times like wish/Promotion</span>
                  </div>
                </div>
            </div>
            <div className="CartItem morph_el">
                <img src="" alt="CartItem_Image"/>
                <div className='CartItem_details'>
                  <div className='CartItem_details_top'>
                    <h4>1/2 pcs M8/M10 RV Ship Bus</h4>
                    <input type="checkbox" id="itemId" name="itemName" value="itemValue"></input>
                  </div>
                  <div className='CartItem_details_body'>
                    <div>
                      <span>ZAR</span> 506.00
                    </div>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div>
                      <button>Checkout Item Only</button>
                      <button>Remove</button>
                    </div>
                    <span>Lead Times like wish/Promotion</span>
                  </div>
                </div>
            </div>

          </div>
            <div className='cartRight morph_el'>
              <div>
                <h4>Order Summary</h4>
                <div >
                  <span class="material-symbols-outlined">
                  add
                  </span>
                  <span >
                  COUPON
                  </span>
                </div>
                <ul>
                  <li>Item Total : <span>R7863.00</span></li>
                  <li>Shipping : <span>R7863.00</span></li>
                  <li>Order Total : <span>R7863.00</span></li>
                </ul>
                <button>CHECKOUT</button>
                <div>
                  Buyer Gaurantees
                </div>
              </div>
              <div>
                Shipping information
              </div>
              <div>
                Payments Type 
              </div>
              <div>
                extra div 
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CartPage