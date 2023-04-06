import React from 'react'
import './OrderSummary.css'


function OrderSummary() {
  return (
    <div className='OrderSummery cartRight morph_el'>
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
      <input type='text' placeholder='Voucher'/>
      <button align='center'>Apply Voucher</button>
    </div>
    <div>
      <label>Additional order Notes/Comments</label>
      <input type='textarea' placeholder='Voucher'/>
    </div>
    <div>
      Payments Type 
    </div>
    <div>
      Shipping information
    </div>
    <div>
      extra div2
    </div>
  </div>
  )
}

export default OrderSummary