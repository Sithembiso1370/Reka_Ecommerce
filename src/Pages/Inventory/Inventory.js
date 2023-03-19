import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InventoryForm from './InventoryForm';
import './Inventory.css'
import { handleFormCreate } from '../../services/crudServices';

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [placeholders, setplaceholders] = useState(
    [
      { name: "rekaStockId", label: "Reka Stock ID", type: "text" },
      { name: "title", label: "Product Description", type: "text" },
      { name: "productDescription", label: "Product Description", type: "text" },
      { name: "costPrice", label: "Cost (R)", type: "number" },
      { name: "salePrice", label: "Sale (R)", type: "text" },
      { name: "upload", label: "Image", type: "file" },
      { name: "supplier", label: "Supplier", type: "text" },
      { name: "manufacturepn", label: "Manufacture PN", type: "text" },
      { name: "quantity", label: "Quantity", type: "number" },
      { name: "color", label: "Color", type: "text" },
      { name: "department", label: "Department", type: "text" },
      { name: "brand", label: "Brands", type: "text" },
      { name: "store", label: "Store", type: "text" },
      { name: "deliveryCost", label: "deliveryCost", type: "text" },
      { name: "sourceCountry", label: "sourceCountry", type: "text" },
      { name: "specs", label: "specs", type: "text" },
      { name: "inventoryDetails", label: "inventoryDetails", type: "text" },
      { name: "sourceLink", label: "sourceLink", type: "text" },
      { name: "sourcingLeadTimes", label: "sourcingLeadTimes", type: "text" }
    ]
  )
  

  const fetchInventory = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/inventory');
      setInventoryList(response.data);
      console.log(response)
      
      
    } catch (err) {
      console.log(err);
    }
    console.log("Inventory in backend = ",inventoryList);
    // console.log("Inventory length = ",inventoryList.length());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();

    // Dynamically set the value of the input
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
    });
    console.log("formdata now = ",formData);
  };

  const handleSuccess = () => {
    setInventoryList([]);
    fetchInventory();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleDelete = async (inventory) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${inventory.productDescription}?`);
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/inventory/${inventory._id}`);
        setInventoryList((prevInventoryList) => prevInventoryList.filter((item) => item._id !== inventory._id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSubmit = async (event,label) => {
    event.preventDefault();
    setIsLoading(true);


    setIsLoading(true);

    console.log("formData to send = ",formData)
    // const submitStatus = await handleFormCreate(event,5000,'inventory',formData);

    // if(submitStatus  & submitStatus.status === "success"){
    //   setIsLoading(false);
    // }
    // else{
    //   console.log("error submiting data..")
    // }

  };

  const handleEdit = async (event,inventory) => {
    event.preventDefault();
    const confirmed = window.confirm(`Are you sure you want to Edit ${inventory.productDescription}?`);
    setcrudForm(<InventoryForm btnLabel='Update' label="edit" isLoading={isLoading} formData={formData} onSuccess={handleSuccess} handleSubmit={handleSubmit} handleChange={handleChange} handleFileChang={handleFileChange} placeholders={placeholders}/>)
  }
  const [crudForm, setcrudForm] = useState(<InventoryForm btnLabel='Save' label="create" isLoading={isLoading} formData={formData} onSuccess={handleSuccess} handleSubmit={handleSubmit} handleChange={handleInputChange} handleFileChang={handleFileChange} placeholders={placeholders}/>)


  // console.log('inventoryList.length : ', inventoryList.length)
  return (
    <>
      <h1>Inventory Management</h1>
        {crudForm}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
            <th>Created By</th>
              <th>Image</th>
              <th>Description</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              
              inventoryList ?
            inventoryList.map((inventory) => (
              <tr key={inventory._id}>
                <td>
                <td>{inventory.createdBy}</td>
                  {inventory.url && (
                    <img src={inventory.url} alt={inventory.productDescription} height="50" />
                  )}
                </td>
                <td>{inventory.productDescription}</td>
                <td>{inventory.supplier}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.department}</td>
                <td>
                  <button onClick={(e) => handleEdit(e,inventory)}>Edit</button>
                  <button onClick={(e) => handleDelete(e,inventory)}>Delete</button>
                </td>
              </tr>
            ))
            :
            ''
            }
          </tbody>
        </table>
      )}
    </>
  );
};

export default Inventory;
