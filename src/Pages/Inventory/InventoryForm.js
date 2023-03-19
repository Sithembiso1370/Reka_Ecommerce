import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { handleFormCreate } from '../../services/crudServices';

const InventoryForm = (props) => {
  const [formData, setFormData] = useState({});
  


  const handleInputChange = async (e) => {
    e.preventDefault();
    
    // Dynamically set the value of the input
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
    console.log("formdata now = ",formData);
  };
  
  const handleSubmit = async (event,formData) => {
    event.preventDefault();

    console.log("formData to send = ",formData)
    const submitStatus = await handleFormCreate(event,5000,'inventory',formData);

    if(submitStatus.status === "success"){
      console.log("success saving data : ",)
    }
    else{
      // console.log("submitStatus.message = ",submitStatus.messages);
      console.log("submitStatus.status = ",submitStatus.status);
      console.log("error submiting data..",submitStatus.data);
    }
  };
  
  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <div className="formHead">{props.label}</div>
      {props.placeholders.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "file" ? (
            <input
              type={field.type}
              name={field.name}
              
              onChange={(e) => handleInputChange(e)}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              onChange={(e) => handleInputChange(e)}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default InventoryForm;
