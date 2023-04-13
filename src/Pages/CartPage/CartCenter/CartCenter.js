import React from 'react'
import handleYocoTokenisation from '../handleTokenisation';
import { useState } from 'react';



function CartCenter() {
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
              <button onClick={(e)=>HandleSubmit(e,{
                  userID: '22232',
                  userEmail: '',
                  itemName: '1/2 pcs M8/M10 RV Ship Bus',
                  itemDescription: 'sample description',
                  amountInCents: 5060,
                  currency: 'ZAR',
                  tokenisationId: ''
              })}
              >Checkout Item Only</button>
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
  )
}

export default CartCenter