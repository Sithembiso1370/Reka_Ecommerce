import React, { useState } from 'react';
import axios from 'axios';
import './InventoryForm.css'

const InventoryForm = (props) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    // Dynamically set the value of the input
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new formData object to submit
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    // Make a POST request to the server with the form data
    try {
      const response = await axios.post('http://localhost:5000/api/inventory', formDataToSubmit);
      console.log('Form submitted successfully:', response.data);
      // Do something with the response data
    } catch (error) {
      console.log('Error submitting form:', error.response.data);
      // Handle the error
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="createForm">
      <div className="formHead">{props.label}</div>
      <div className="formInputsContainer">
      {props.placeholders.map((field) => (
        <div key={field.name} className="formInputContainer">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "file" ? (
            <input
              type={field.type}
              name={field.name}
              onChange={handleInputChange}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              onChange={handleInputChange}
            />
          )}
        </div>
      ))}
      </div>
      <div className="formButtonsContainer">
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default InventoryForm;

