import React from 'react'
import { useState } from 'react'
import Footer from '../../Sections/Footer'
import Navbar from '../../Sections/Navbar'
import CartCenter from './CartCenter/CartCenter'
import CartCenterDetails from './CartCenter/CartCenterDetails'
import CartCenterOrdeReview from './CartCenter/CartCenterOrdeReview'
import './CartPage.css'
import CheckoutProcessNavigator from './CheckoutProcessNavigator/CheckoutProcessNavigator'
import OrderSummary from './OrderSummary/OrderSummary'

function CartPage() {
  const [body, setbody] = useState(<CartCenter/>);

  const setCheckoutStage = (e) => {
    e.preventDefault();
    // alert(` ${e.target.name} clicked!!!`)

    switch (e.target.name.toLowerCase()) {
      case 'cart':
        setbody(<CartCenter/>)
        break;
      case 'details':
        setbody(<CartCenterDetails/>)
        break;
      case 'review':
        setbody(<CartCenterOrdeReview/>)
        break;
      default:
        setbody(<CartCenter/>)
        break;
    }
  } 


  return (
    <div className="CartPage">
        <Navbar/>
        <CheckoutProcessNavigator setCheckoutStage={setCheckoutStage}/>
        <div className="CartPageMain">
            {body}
            <OrderSummary/>
        </div>
        <Footer/>
    </div>
  )
}

export default CartPage