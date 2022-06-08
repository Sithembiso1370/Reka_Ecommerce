import React,{useRef} from 'react'
import { Rerousel } from 'rerousel';
import styled from 'styled-components'


function AddBanner() {
  const ref = useRef(null);

  const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-family: Signika;
    font-weight: bold;
    font-size: 1.5em;
    border: solid 1px black;
    background-color: #61DAFB;
    
    @media(max-width: 1150px) {
        width: 100%;
        heigh:100%;

    }
  `;

  return (
    <Rerousel itemRef={ref}>
      <Item ref={ref}>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
    </Rerousel>
  );
}


export default AddBanner