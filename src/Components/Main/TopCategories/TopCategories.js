import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import slides from './slides';

const TopCategories = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const myslides = slides.map((slide)=>{
    <div style={{ height: 400, background: `url(${slide.img})` }}>Card</div>
  })
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={0}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop={true}
      >
        
        {/* <div style={{ height: 400, background: '#EEE' }}>First card</div>
        <div style={{ height: 400, background: '#EEE' }}>Second card</div>
        <div style={{ height: 400, background: '#EEE' }}>Third card</div>
        <div style={{ height: 400, background: '#EEE' }}>Fourth card</div>
        <div style={{ height: 400, background: '#EEE' }}>First card</div>
        <div style={{ height: 400, background: '#EEE' }}>Second card</div>
        <div style={{ height: 400, background: '#EEE' }}>Third card</div>
        <div style={{ height: 400, background: '#EEE' }}>Fourth card</div> */}
        {
            myslides
        }
      </ItemsCarousel>
    </div>
  );
};


export default TopCategories