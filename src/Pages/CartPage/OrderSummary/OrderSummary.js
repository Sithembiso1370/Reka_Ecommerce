import React from 'react'
import './OrderSummary.css'
import handleYocoTokenisation from '../handleTokenisation';
import { useState } from 'react';


function OrderSummary() {
  const [purchaseData, setpurchaseData] = useState({
    userID: '22232',
    userEmail: '',
    itemName: '',
    itemDescription: '',
    amountInCents: 2799,
    currency: 'ZAR',
    tokenisationId: ''
  });




const HandleSubmit = async (e,purchaseObj)=>{
  // Tokenise the purchase for yoco handling in backend
  console.log("purchaseData to send : ",purchaseObj)
  // console.log("handleYocoTokenisation Result : ",handleYocoTokenisation(purchaseData))
  const tokenisatioResults = await handleYocoTokenisation(purchaseObj);

  if(tokenisatioResults.status){
    purchaseData['tokenisationId'] =  tokenisatioResults.result.id;
    setpurchaseData(purchaseData);
    console.log('successfully tokenised.....',tokenisatioResults)
    // Send  a request for the backend to handle the payment
    // axios.post('/api/purchases', purchaseData)
    // .then(function (response) {
    //   console.log("success axios : ",response);
    // })
    // .catch(function (error) {
    //   console.log("axios fail : ",error);
    // });
  }else{
    console.log('Not successfully tokenised.....',tokenisatioResults)
  }
}

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
      <button
      onClick={(e)=>HandleSubmit(e,{
        userID: '22232',
        userEmail: '',
        itemName: 'Multiple Items',
        itemDescription: 'need to join arrays or string titles here',
        amountInCents: 786300,
        currency: 'ZAR',
        tokenisationId: ''
    })}
      >CHECKOUT</button>
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