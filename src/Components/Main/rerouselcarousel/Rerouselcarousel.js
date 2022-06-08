import React,{useRef} from 'react'
import { Rerousel } from 'rerousel';
import styled from 'styled-components'
import ThreeDcard from '../3dcard/threeDcard';


function Rerouselcarousel() {
  const ref = useRef(null);

  const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100%;
    font-family: Signika;
    font-weight: bold;
    font-size: 1.5em;
    border: solid 1px black;
    background-color: #61DAFB;
    
    @media(max-width: 1150px) {
        width: 200px;
        heigh:100%;

    }
  `;

  return (
    <Rerousel itemRef={ref}>
        <ThreeDcard ref={ref}/>
        <ThreeDcard ref={ref}/>
        <ThreeDcard ref={ref}/>
        <ThreeDcard ref={ref}/>
        <ThreeDcard ref={ref}/>
    </Rerousel>
  );
}


export default Rerouselcarousel