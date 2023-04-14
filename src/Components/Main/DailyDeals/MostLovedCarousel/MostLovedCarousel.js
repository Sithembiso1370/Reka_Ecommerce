import React,{useRef} from 'react'
// import './Topbrands.css'
import { Rerousel } from 'rerousel';
import styled from 'styled-components'
import Product from '../../StoreFilture/Product';
import { getProducts } from '../../StoreFilture/ProductsData';
import './MostLovedCarousel.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';



function MostLovedCarousel(props) {
    const ref = useRef(null);

    const Product = styled.div`
    position: relative;
    background-color: rgba(255, 255, 255, 0.273);
    border: none;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    gap: 2%;
    border-radius: 15px;

    @media(min-width: 300px) {
      width: 100%;
      heigh:98%;
    }
  
    @media(min-width: 600px) {
      width: 50%;
      heigh:98%;
    }
  
    @media(min-width: 900px) {
      width: 30%;
      heigh:98%;
    }
  
    @media(min-width: 1200px) {
      width: 25%;
      heigh:98%;
    }
  
    @media(min-width: 1500px) {
      width: 20%;
      heigh:98%;
    }
    
  `;

  const [data, setData] = useState([]);
    let productsData = getProducts();


    const fetchData = async () =>{
      const response = await fetch('http://localhost:5000/api/inventory');
      const jsonData = await response.json();
      setData(jsonData);
      console.log("jsonData = ",jsonData)
    }

    useEffect(() => {
      fetchData();
    }, []);





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
  


  
    return (

    <Rerousel itemRef={ref}
    interval={props.interval}
    >
        {

          data.map((product) =>
          <Product ref={ref}
          style={{
            backgroundImage: `url(${product.url})`,
            backgroundSize: '100%',
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          >
            <ul className="productTop">
              <li >{product.title}</li>
              <li className="material-symbols-outlined">bookmark</li>
            </ul>
            <a href='' className="productCenter"
            



            
            >

<Link
        
        className='ProductImageLink'
        to={`/Store/Product/${product.id}`}
        key={product.title}
      >ZAR {product.salePrice}</Link>
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


