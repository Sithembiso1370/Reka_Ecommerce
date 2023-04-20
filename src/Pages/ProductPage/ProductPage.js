import React from 'react'
import Footer from '../../Sections/Footer'
import Navbar from '../../Sections/Navbar'
import './ProductPage.css'
import {getProduct} from './ProductsData'
import { useParams } from "react-router-dom";
import Topbrands from '../../Components/Main/DailyDeals/Topbrands'
import brands from '../../Sections/brands'
import ImageGallery from 'react-image-gallery';
import { useState } from 'react'
import { useEffect } from 'react'




const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


function ProductPage() {
  let params = useParams();
  // let process =   getmyproduct();
  const [product, setproduct] = useState({})


  


 const  getmyproduct = async (number) => {
    // return products;
    const response = await fetch(`http://localhost:5000/api/inventory/${number}`);
    const jsonData = await response.json();
    // setData(jsonData);
    // console.log("jsonData = ",jsonData);
    if(jsonData){
      // return jsonData.find(
      //   (product) => product._id === number
      // );
      setproduct(jsonData)
    }
    else{
      setproduct({});
    }

  }

  useEffect(() => {
    getmyproduct(params.productId)
  }, [])

  console.log("params.productId = ",params.productId)


  console.log("product+ = ",product);
  return (
    <div className="ProductPage">
        <Navbar/>
        <div className="ProductPageMain"
            // style={{
            //   background: `url(${process.img})`
            //   ,backgroundRepeat: 'no-repeat',
            //   backgroundPosition: 'center'
            // }}
        >
          {/* NEED TO ADD A STORE BANNER SOMEWHERE HERE */}
            <div className="ProductPageMain_Top">
                <div className="ProductPageMain_TopLeft"
                style={{
                  background: `url(${product.url})`
                  ,backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
                >

                </div>
                {/* <ImageGallery items={images}  /> */}
                <div className="ProductPageMain_TopRight">
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.productDescription
                  }</p>

                  <h3><span>ZAR</span> {product.salePrice}.00</h3>

                  {/* colors */}
                  <div>
                    <h4>Color</h4>
                    <select>
                      <option>Red</option>
                      <option>Green</option>
                      <option>Orange</option>
                      <option>Blue</option>
                    </select>
                  </div>
                  {/* sizes */}
                  <div>
                    <h4>Sizes</h4>
                    <select>
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>
                  <div>
                    <h4>Quantity</h4>
                    <span>-</span>
                    <p>3</p>
                    <span>+</span>
                    <p>{product.quantity} available</p>
                  </div>
                  <div>
                    <div>
                      <button>Buy Now</button>
                      <button>Add to Cart</button>
                      <button >whishlist</button>
                    </div>
                  </div>
                </div>
                </div>
            </div>

            <div className="ProductPageMain_Middle">
              <div className="ProductPageMain_MiddleTabs">
                {/* get w3 schools tabs sections tut here */}
                <ul className="">
                  <li>Reviews Chat</li>
                  <li>Description & Specifications</li>
                  <li>Delivery & Returns</li>
                </ul>
              </div>
              <div className="ProductPageMain_MiddleTabsBody">
              ProductPageMain_MiddleTabsBody
                {/* -- */}
                
                {/* -- */}

              </div>
            </div>

            {/* Create an Infinite slow carousel of similar products */}
            <div className="ProductPageMain_BottomTabsBody">
                <h3>Similar products</h3>
                <div>
                <Topbrands brands={brands}/>
                </div>
            </div>
            <Footer/>
        </div>
        
    </div>
  )
}

export default ProductPage