import React from 'react'

const Product = (props) => {

  return (
    <div className='Product' 
    style={{
      backgroundImage: `url(${props.img})`,
      backgroundSize: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <ul className="ProductDetails_top">
        <li className="productOwner"
                style={{
                 backgroundImage: `url(${props.p_logo})`
                }}
                
        >
          <span class="material-symbols-outlined">
          print
          </span> 
        </li>
        <li>{props.country}</li>
      </ul>
      <a href='/ProductPage'
      // 'ProductContainer cont_image'
      className='ProductImage'
      // onMouseEnter={showDetails}

      >$ 34.87</a>
      <ul className="ProductDetails_bottom">
        <li>
          <span class="material-symbols-outlined">
          thumb_up
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined">
          share
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined">
          favorite
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined">
          add_shopping_cart
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Product