import React from 'react'

const ShippingDetails = () => {
  return (
          <div className="bottomMain ShippingDetails">
            <div className="bottomMainTop">
                <div className="nationwideShipping">
                <span class="material-symbols-outlined">
                savings
                </span>
                {/* Great value items */}
                </div>
                <div className="returnpolicy">
                <span class="material-symbols-outlined">
                sync
                </span>
                {/* returns policy */}
                </div>
                <div className="returnpolicy">
                <span class="material-symbols-outlined">
                payments
                credit_card
                </span>
                {/* Pay with the world's top payment methods */}
                </div>
                <div className="returnpolicy">
                {/* Worldwide delivery */}
                <span class="material-symbols-outlined">
                pin_drop
                bring_your_own_ip
                local_shipping
                </span>
                </div>
            </div>
            <div className="bottomMainBottom">
                <div className="nationwideShipping">
                {/* nationwideShipping */}
                <span class="material-symbols-outlined">
                high_quality
                </span>
                </div>
                <div className="returnpolicy">
                <span class="material-symbols-outlined">
                group
                </span>
                {/* Easy 14 days returns */}
                </div>
                <div className="returnpolicy">
                <span class="material-symbols-outlined">
                public
                </span>
                {/* warranty */}
                </div>
                <div className="returnpolicy">
                <span class="material-symbols-outlined">
                sync_lock
                </span>
                {/* secure checkout */}
                </div>
            </div>
          </div>
  )
}

export default ShippingDetails