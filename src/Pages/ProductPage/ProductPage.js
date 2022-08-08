import React from 'react'
import Footer from '../../Sections/Footer'
import Navbar from '../../Sections/Navbar'
import './ProductPage.css'
import {getProduct} from './ProductsData'
import { useParams } from "react-router-dom";

function ProductPage() {
  let params = useParams();
  let process = getProduct(parseInt(params.productId, 10));
  return (
    <div className="ProductPage">
        <Navbar/>
        <div className="ProductPageMain">
            <div className="ProductPageMain_Top">
                <div className="ProductPageMain_TopLeft">
                INSERT SLIDER HERE
                </div>
                <div className="ProductPageMain_TopRight">
                ProductPageMain_TopRight
                </div>
            </div>

            <div className="ProductPageMain_Middle">
              <div className="ProductPageMain_MiddleTabs">
              <ul className="">
                <li>Reviews Chat</li>
                <li>Description & Specifications</li>
                <li>Delivery & Returns</li>
              </ul>
              </div>
              <div className="ProductPageMain_MiddleTabsBody">
              ProductPageMain_BottomTabsBody
              </div>
            </div>


            <div className="ProductPageMain_BottomTabsBody">
                Similar products
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default ProductPage