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
  width: 25%;
  height: 100%;
  font-family: Signika;
  font-weight: bold;
  font-size: 1.5em;
  border: solid 1px black;
  background-color: #61DAFB;
  overflow: active;
  
  @media(max-width: 1150px) {
      width: 50%;
      heigh:98%;

  }

  @media(max-width: 600px) {
    width: 100%;
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
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                margin: '1%',
                boxShadow: '5px 5px 11px #737373, -5px -5px 11px #ffffff',
                border: 'none',
                borderRadius: '5px'

              }}
              >
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
                boxShadow: '5px 5px 11px #737373, -5px -5px 11px #ffffff',
                border: 'none',
                borderRadius: '5px'

              }}
              >
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