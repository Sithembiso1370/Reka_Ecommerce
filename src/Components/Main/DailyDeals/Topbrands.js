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
  width: 25%;
  height: 90%;
  font-family: Signika;
  font-weight: bold;
  font-size: 1.5em;
  border: solid 1px black;
  border-radius: 30px;
  overflow: active;

  @media(min-width: 300px) {
    width: 100%;
    heigh:98%;
  }

  @media(min-width: 600px) {
    width: 50%;
    heigh:98%;
  }

  @media(min-width: 900px) {
    width: 30%;
    heigh:98%;
  }

  @media(min-width: 1200px) {
    width: 25%;
    heigh:98%;
  }

  @media(min-width: 1500px) {
    width: 20%;
    heigh:98%;
  }
  


`;


  return (
    <div className='topbrands'>
        <div className="subtitle_topbrands">
            <hr className='leftline'/>
            <span>{props.label}</span>
            <hr className='rightline'/>
        </div>
        <div className='TopBrandsPSlider'>
          <Rerousel itemRef={ref}
          interval={props.interval}
          >
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
                  borderRadius: '50%'

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


