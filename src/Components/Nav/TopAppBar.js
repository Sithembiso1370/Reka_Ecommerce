import * as React from 'react';
import './opButtonAppBar.css'
import CustomControl from './ReactSelect';
import SearchBar from './SearchBar/SearchBar';
import SelectCustStyles from './SelectCustStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TemporaryDrawer from '../TemporaryDrawer';


const logo = require("./Logos/sqsqsqqsqq.JPG")
export default function TopButtonAppBar() {
  return (
    <div className='my_div1'>

        <div className='my_div1_upper'>
          <div className='image_holder'>
            <img src={logo} alt=""/>
              {/* <ul>
                <li className='li_1'>R</li>
                <li className='li_2'>E</li>
                <li className='li_3'>K</li>
                <li className='li_4'>A</li>
                <li className='li_5'>.Com</li>
              </ul> */}
          </div>
          <div className='search_holder'>
            <div className='search_main'>
                <SearchBar/>
            </div>
          </div>
          <div className='right_holder'>
              <ul>
                <li className='li_r_1' key={1}>
                  <span className="material-symbols-outlined">
                  comment
                  </span>
                </li>
                <li className='li_r_2'>
                  <span className="material-symbols-outlined">
                  receipt_long
                  </span>
                </li>
                <li className='li_r_3'>
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                </li>
                <li className='li_r_4' value={5} >
                  <span className="material-symbols-outlined ">
                  shopping_cart_checkout
                  </span>
                  <span className='cart_count '>
                    {/* 5 */}
                  </span>
                </li>
                <li className='li_r_5'>
                  <span className="material-symbols-outlined ">
                  campaign
                  </span>
                </li>

              </ul>
          </div>
        </div>

        <div className='my_div1_lower'>

          <div className='categories_sect'>
            {/* <span class="material-symbols-outlined text_color">
            storefront
            </span> */}
            <TemporaryDrawer/>
            {/* <span class="material-symbols-outlined text_color">
              apps
            </span> */}

          </div>

          <div className='link_sect'>
            <ul>
              {/* select::-ms-expand {
                  display: none;
              } */}
              <li>Home</li>
              <li>Print on demand</li>
              <li>
                {/* <select
                style={{
                  
                }}
                >
                  <option>Services</option>
                  <option>Print on demand</option>
                </select> */}
                Services
              </li>
              <li>Dropshipping</li>
              <li>Earn</li>
              <li>Learn</li>
              <li>Invest</li>
              <li>Play</li>
              <li><a href='/Contactus'>Contact Us</a></li>
              <li>Blog</li>
            </ul>
          </div>

        </div>

    </div>
  );
}
