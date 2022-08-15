import React from 'react'
import { useParams } from 'react-router-dom';

function Department() {
    // Get the department parameters from the headers 
    // Use the params to decide which sets of data to show
    // http://localhost:3000/Store/Department/MensClothing
    let params = useParams();

  return (
    <div>Department {params.departmentId}</div>
  )

}

export default Department