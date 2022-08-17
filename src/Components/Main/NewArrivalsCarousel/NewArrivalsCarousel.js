import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

const NewArrivalsCarousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={6}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 400, background: '#EEE' }}>First card : Product details overlay here</div>
        <div style={{ height: 400, background: '#EEE' }}>Second card : Product details overlay here</div>
        <div style={{ height: 400, background: '#EEE' }}>Third card : Product details overlay here</div>
        <div style={{ height: 400, background: '#EEE' }}>Fourth card : Product details overlay here</div>
        <div style={{ height: 400, background: '#EEE' }}>First card : Product details overlay here</div>
        <div style={{ height: 400, background: '#EEE' }}>Second card : Product details overlay here</div>
        <div style={{ height: 400, background: '#EEE' }}>Third card : Product details overlay here</div>
        <div style={{ height: 400, background: '#EEE' }}>Fourth card : Product details overlay here</div>
      </ItemsCarousel>
    </div>
  );
};


export default NewArrivalsCarousel
