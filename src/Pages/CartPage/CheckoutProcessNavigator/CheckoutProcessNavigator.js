import React from 'react'

function CheckoutProcessNavigator(props) {
    



  return (
    <div className='CheckoutProcessNavigator'>
        <span></span>
        <span className="span_center">
        <button name='Product' onClick={(e)=>props.setCheckoutStage(e)}>Product(s)</button>
        <span class="material-symbols-outlined">
            arrow_right_alt
        </span>
        <button name='cart' onClick={(e)=>props.setCheckoutStage(e)}>Cart</button>
        <span class="material-symbols-outlined">
            arrow_right_alt
        </span>
        <button name='details' onClick={(e)=>props.setCheckoutStage(e)}>Details</button> 
        <span class="material-symbols-outlined">
            arrow_right_alt
        </span>
        <button name='review' onClick={(e)=>props.setCheckoutStage(e)}>Order Review</button>
        </span>
        <span></span>
    </div>
  )
}

export default CheckoutProcessNavigator