import React from 'react'
import './CartCenterDetails.css'

function CartCenterDetails() {
  return (
    <div className='CartCenterDetails'>
      {/* If shipping address stored retriew currentShipping details */}
      <div><h1>Shipping Details</h1></div>
      <div className='CartCenterDetailsShippingAddress'>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='First Name'/>
      </div>
      {/* If Billing address stored retriew currentShipping details */}
      <div><h1>Billing Details</h1><div>checkbox:same as above</div></div>
      <div className='CartCenterDetailsBillingAddress'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='First Name'/>
          <button>Proceed to Checkout</button>
      </div>
      <div>..</div>
    </div>
  )
}

export default CartCenterDetails