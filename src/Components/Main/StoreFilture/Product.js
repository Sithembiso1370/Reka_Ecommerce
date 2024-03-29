import React from 'react'
import { Link } from "react-router-dom";
import './Product.css'

function Product(props) {
  return (
    <div className='Product' 
      style={{
        background: `url(${props.product.url ? props.product.url : ''})`,
        backgroundSize: '100%',
        backgroundPosition: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ul className="ProductDetails_top">
        <li>{props.product.title}</li>
        
        <span class="material-symbols-outlined">
        bookmark
        </span>
      </ul>
      <a className='ProductImage' id='ProductImage'
        style={{
          opacity: 0.5,
          // backgroundImage: `url(${props.product.url})`,
          // backgroundSize: '100%',
          // backgroundPosition: 'cover',
          // backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='ProductImageBody'>
          {/* empty */}
          
        </div>
      <Link
        
        className='ProductImageLink'
        to={`/Store/Product/${props.product._id}`}
        key={props.product.title}
      >ZAR {props.product.salePrice} {'.00'}</Link>
      </a>
      <ul className="ProductDetails_bottom">
        <li>
          <span class="material-symbols-outlined">
          thumb_up
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined ">
          add_comment
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined "
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