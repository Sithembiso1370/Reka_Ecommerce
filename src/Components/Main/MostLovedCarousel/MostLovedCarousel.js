import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

const MostLovedCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={40}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 200, background: '#EEE' }}>First card : Product details overlay here</div>
        <div style={{ height: 200, background: '#EEE' }}>Second card : Product details overlay here</div>
        <div style={{ height: 200, background: '#EEE' }}>Third card : Product details overlay here</div>
        <div style={{ height: 200, background: '#EEE' }}>Fourth card : Product details overlay here</div>
        <div style={{ height: 200, background: '#EEE' }}>First card : Product details overlay here</div>
        <div style={{ height: 200, background: '#EEE' }}>Second card : Product details overlay here</div>
        <div style={{ height: 200, background: '#EEE' }}>Third card : Product details overlay here</div>
        <div style={{ height: 200, background: '#EEE' }}>Fourth card : Product details overlay here</div>
      </ItemsCarousel>
    </div>
  );
};


export default MostLovedCarousel



