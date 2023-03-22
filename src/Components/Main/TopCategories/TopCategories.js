import React from 'react';
import './TopCategories.css';
import slides from './slides';

const TopCategories = () => {

  return (
    <div className="TopCategoriesMain">
      <ul>
        {
          slides.map((slide)=>(
            <li
            style={{
              // background: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >{slide.title}</li>
          ))
        }

        {/* <li>Gaming</li>
        <li>Clothing for Women</li>
        <li>Clothing for Men</li>
        <li>Trending Gadgets</li>
        <li>Most Bought Items</li>
        <li>Least Bought Items</li>
        <li>Jewelery</li>
        <li>Computers and Ellectronics</li>
        <li>Industrial Ellectronics</li>
        <li>Automation Supplies</li>
        <li>Garden and Outdoor Deco</li>
        <li>Baby and Todler</li>
        <li>Sports and Training</li>
        <li>Baby and Todler</li> */}
      </ul>
    </div>
  );
};


export default TopCategories