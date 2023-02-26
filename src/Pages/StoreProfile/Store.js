import React from 'react'
import { useParams } from 'react-router-dom';

function Store() {
    let params = useParams();

  return (
    <div>params : {params.storeId} </div>
  )
  
}

export default Store