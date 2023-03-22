import React from 'react'

function OrderSummary() {
  return (
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
  )
}

export default OrderSummary