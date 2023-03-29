import React,{useRef} from 'react'
import './Topbrands.css'
import { Rerousel } from 'rerousel';
import styled from 'styled-components'


function Topbrands(props) {
  const ref = useRef(null);

  const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 90%;
  font-family: Signika;
  font-weight: bold;
  font-size: 1.5em;
  border: solid 1px black;
  overflow: active;
  
  @media(max-width: 1150px) {
      width: 20%;
      heigh:98%;

  }

  @media(max-width: 700px) {
    width: 50%;
    heigh:98%;
  }

  @media(max-width: 400px) {
    width: 100%;
    heigh:98%;
  }
`;


  return (
    <div className='topbrands'>
        <h2 className="subtitle_topbrands">
            <hr className='leftline'/>
            <span>{props.label}</span>
            <hr className='rightline'/>
        </h2>
        <div className='TopBrandsPSlider'>
          <Rerousel itemRef={ref}>
            {
              props.brands.map((slide)=>(
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

        </div>
    </div>
  )
}

export default Topbrands


