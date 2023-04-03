import React,{useRef} from 'react'
// import './Topbrands.css'
import { Rerousel } from 'rerousel';
import styled from 'styled-components'
import Product from '../../StoreFilture/Product';
import { getProducts } from '../../StoreFilture/ProductsData';
import './MostLovedCarousel.css'
import { Link } from "react-router-dom";



function MostLovedCarousel() {
    const ref = useRef(null);

    const Product = styled.div`
    position: relative;
    background-color: rgba(255, 255, 255, 0.273);
    border: none;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    gap: 1%;
    border-radius: 15px;
    gap: 1%;

    @media(max-width: 2 150px) {
    width: 20%;
    height:98%;
    
    }
    
    @media(max-width: 1150px) {
        width: 25%;
        height:98%;
    
    }
    
    @media(max-width: 700px) {
      width: 50%;
      height:98%;
    
    
    @media(max-width: 400px) {
      width: 100%;
      height:98%;
    }
  `;

  let productsData = getProducts();
  // to clear locale storage
  // localStorage.clear()




  const handleGetFromCart =  (e,item) => {
    e.preventDefault()
    const items = JSON.parse(localStorage.getItem(item));
    if(items){
      console.log('local storage items = ',items)
      return items;
    }
    else{
      console.log('local storage items = ',[])
      return [];
    }
  }

  
  const handleGetFromCartNoE =  (item) => {
    const items = JSON.parse(localStorage.getItem(item));
    if(items){
      console.log('local storage items = ',items)
      return items;
    }
    else{
      console.log('local storage items = ',[])
      return [];
    }
  }

  const handleAdd2Cart =  (e,productDetailsObject) => {
    e.preventDefault()
    const cartstatus = localStorage.setItem('Cart', JSON.stringify([...handleGetFromCartNoE('Cart'),productDetailsObject]));
    alert(`Items added to cart `);
  }
  


      const myproducts =  productsData.map((product) =>
          <Product ref={ref} className="Product">
                      <ul className="ProductDetails_top">
        <li>{product.country}</li>
        <span class="material-symbols-outlined">
        bookmark
        </span>
      </ul>
      <a className='ProductImage' id='ProductImage'
        style={{
          backgroundImage: `url(${product.img})`,
          backgroundSize: '100%',
          backgroundPosition: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
      <Link
        
        className='ProductImageLink'
        to={`/Store/Product/${product.id}`}
        key={product.country}
      >
        {/* $ 34.87 */}
      </Link>
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
          onClick={(e)=>handleAdd2Cart(e,product)}
          >
          add_shopping_cart
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined morph_up" onClick={(e)=>handleGetFromCart(e,'Cart')}>
          share
          </span>
        </li>
      </ul>
          </Product>
      );
  
    return (

    <Rerousel itemRef={ref}>
        {

          productsData.map((product) =>
          <Product ref={ref}>
            <ul className="productTop">
              <li >{product.country}</li>
              <li className="material-symbols-outlined">bookmark</li>
            </ul>
            <a href='' className="productCenter"
            
            style={{
              backgroundImage: `url(${product.img})`,
              backgroundSize: '100%',
              backgroundPosition: 'cover',
              backgroundRepeat: 'no-repeat',
            }}


            
            >

<Link
        
        className='ProductImageLink'
        to={`/Store/Product/${product.id}`}
        key={product.country}
      >$ 34.87</Link>
            </a>
            <ul className="productBottom">
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
          onClick={(e)=>handleAdd2Cart(e,product)}
          >
          add_shopping_cart
          </span>
        </li>
        <li>
          <span class="material-symbols-outlined morph_up" onClick={(e)=>handleGetFromCart(e,'Cart')}>
          share
          </span>
        </li>
            </ul>
          </Product>
      )
        
        }

    </Rerousel>
    )
}

export default MostLovedCarousel


