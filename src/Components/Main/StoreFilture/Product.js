import React from 'react'
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className='Product' 

    >
      <ul className="ProductDetails_top">
        <li>{props.product.title}</li>
        <span class="material-symbols-outlined">
        bookmark
        </span>
      </ul>
      <a className='ProductImage' id='ProductImage'
        style={{
          backgroundImage: `url(${props.product.url})`,
          backgroundSize: '100%',
          backgroundPosition: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='ProductImageBody'>
          {/* empty */}
          
        </div>
      <Link
        
        className='ProductImageLink'
        to={`/Store/Product/${props.product.id}`}
        key={props.product.title}
      >ZAR {props.product.salePrice}</Link>
      </a>
      <ul className="ProductDetails_bottom">
        <li>
          <span class="material-symbols-outlined morph_up">
          thumb_up
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined morph_up">
          add_comment
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined morph_up"
          onClick={(e)=>props.handleAdd2Cart(e,props.product)}
          >
          add_shopping_cart
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined morph_up" onClick={(e)=>props.handleGetFromCart(e,'Cart')}>
          share
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Product