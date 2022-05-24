import * as React from 'react';
import './opButtonAppBar.css'
import CustomControl from './ReactSelect';
import SearchBar from './SearchBar';
import SelectCustStyles from './SelectCustStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TemporaryDrawer from '../TemporaryDrawer';



export default function TopButtonAppBar() {
  return (
    <div className='my_div1'>

        <div className='my_div1_upper'>
          <div className='image_holder'>
              <ul>
                <li className='li_1'>R</li>
                <li className='li_2'>E</li>
                <li className='li_3'>K</li>
                <li className='li_4'>A</li>
                <li className='li_5'>.Com</li>
              </ul>
          </div>
          <div className='search_holder'>
            <div className='search_main'>
                <SearchBar/>
            </div>
          </div>
          <div className='right_holder'>
              <ul>
                <li className='li_r_1'>
                  <span className="material-symbols-outlined color_orange">
                  receipt_long
                  </span>
                </li>
                <li className='li_r_2'>
                  <span className="material-symbols-outlined color_orange">
                    account_circle
                  </span>
                </li>
                <li className='li_r_3' value={5} >
                  <span className="material-symbols-outlined color_orange">
                  shopping_cart_checkout
                  </span>
                  <span className='cart_count color_orange'>
                    5
                  </span>
                </li>
              </ul>
          </div>
        </div>

        <div className='my_div1_lower'>

          <div className='categories_sect'>
            <span class="material-symbols-outlined text_color">
            storefront
            </span>
            <TemporaryDrawer/>
            {/* <span class="material-symbols-outlined text_color">
              apps
            </span> */}

          </div>

          <div className='link_sect'>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Sell</li>
              <li>Contact Us</li>
              <li>Home</li>
            </ul>
          </div>

        </div>

    </div>
  );
}
