import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './MostLovedCarousel.css'

const MostLovedCarousel = () => {
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
        <div style={{ 
          height: 400, 
          background: `url(https://i0.wp.com/www.fotodiscountworld.co.za/wp-content/uploads/2022/05/JVC-JY-HM90-HD-Camcorder.jpg111.jpg?resize=500%2C500&ssl=1)` ,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
          }}>First card : Product details overlay here</div>
        <div style={{ 
          height: 400, 
          background: `url(https://img.directindustry.com/images_di/photo-g/894-13005249.jpg)` ,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>Second card : Product details overlay here</div>
        <div style={{ 
            height: 400, 
            background: `url(https://img.abercrombie.com/is/image/anf/KIC_155-1144-0753-279_prod1?policy=product-medium&wid=350&hei=438)` ,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>Third card : Product details overlay here</div>
        <div style={{ 
            height: 400, 
            background: `url(https://cdn.shopify.com/s/files/1/0260/6117/6935/products/Nguni-Pixalot_Wall_Art-220-x-130cm-Mounted-Canvas-34_3615ec80-65fb-4b7f-ab93-23d373a3c49e.jpg?v=1630041409)` ,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>Fourth card : Product details overlay here</div>
        <div style={{ 
            height: 400, 
            background: `url(https://www.lenovo.com/medias/lenovo-laptop-ideapad-3i-15in-series.png?context=bWFzdGVyfHJvb3R8ODk4NzN8aW1hZ2UvcG5nfGhhMS9oZjcvMTQxOTE1MTcxNzE3NDIucG5nfDAxYWRlMWE0ZTdhMjNlNDk4ODI3ZjQ2NWNkZmYyMjJmMjhmMDk5NjJmYTA3NzA1NGQwYzY5ZTRlZDA2MWI0ZjU)` ,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
         }}>First card : Product details overlay here</div>
        <div style={{ 
            height: 400, 
            background: `url(https://buythis.co.za/wp-content/uploads/2021/02/ae_motor_3kw.jpg)` ,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
         }}>Second card : Product details overlay here</div>
        <div style={{
            height: 400, 
            background: `url(https://images.samsung.com/is/image/samsung/p6pim/za/sp-lsp3blaxxa/gallery/za-the-freestyle-lsp3b-sp-lsp3blaxxa-531079174?$730_584_PNG$)` ,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
         }}>Third card : Product details overlay here</div>
        <div style={{ 
            height: 400, 
            background: `url(https://i0.wp.com/www.fotodiscountworld.co.za/wp-content/uploads/2022/05/JVC-JY-HM90-HD-Camcorder.jpg111.jpg?resize=500%2C500&ssl=1)` ,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
         }}>Fourth card : Product details overlay here</div>
      </ItemsCarousel>
    </div>
  );
};


export default MostLovedCarousel



