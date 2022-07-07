import React,{useRef} from 'react'
import './Topbrands.css'
import { Rerousel } from 'rerousel';
import styled from 'styled-components'
import brands from './brands'
import brands2 from './brands2';

function Topbrands() {
  const ref = useRef(null);

  const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 90%;
  font-family: Signika;
  font-weight: bold;
  font-size: 1.5em;
  border: solid 1px black;
  background-color: #61DAFB;
  overflow: active;
  
  @media(max-width: 1150px) {
      width: 33%;
      heigh:98%;

  }

  @media(max-width: 600px) {
    width: 25%;
    heigh:100%;

}
`;


  return (
    <div className='topbrands'>
        <h2 className="subtitle_topbrands">
            <hr className='leftline'/>
            <span>Top Brands</span>
            <hr className='rightline'/>
        </h2>
        <div className='TopBrandsPSlider'>
        <Rerousel itemRef={ref}>
          {
            brands.map((slide)=>(
              <Item ref={ref}
              style={{ 
                background: `url(${slide.img})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                margin: '1%',
                border: 'none',
                borderRadius: '5px'

              }}
              className="brandsItem">
                {/* {slide.country} */}
              </Item>
            ))
          }

        </Rerousel>
        <Rerousel itemRef={ref} className="RerouselCont">
          {/* <Item ref={ref}>1</Item> */}
          {
            brands2.map((slide)=>(
              <Item ref={ref}
              style={{ 
                background: `url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                margin: '2%',
                border: 'none',
                borderRadius: '5px'

              } }
              className="brandsItem">
                {/* {slide.country} */}
              </Item>
            ))
          }
        </Rerousel>
        </div>
    </div>
  )
}

export default Topbrands