import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InventoryForm from './InventoryForm';
import './Inventory.css'

const Inventory = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchInventory = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/inventory');
      await setInventoryList(response.data.data);
      
      console.log("Inventory in backend = ",inventoryList);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleSuccess = () => {
    setInventoryList([]);
    fetchInventory();
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
  console.log('inventoryList.length : ', inventoryList.length)
  return (
    <>
      <h1>Inventory Management</h1>
      <InventoryForm onSuccess={handleSuccess} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
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
              
              inventoryList.length > 0 ?
            inventoryList.map((inventory) => (
              <tr key={inventory._id}>
                <td>
                  {inventory.url && (
                    <img src={inventory.url} alt={inventory.productDescription} height="50" />
                  )}
                </td>
                <td>{inventory.productDescription}</td>
                <td>{inventory.supplier}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.department}</td>
                <td>
                  <button onClick={() => handleDelete(inventory)}>Delete</button>
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
