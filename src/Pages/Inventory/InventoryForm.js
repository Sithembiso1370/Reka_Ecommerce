import { useState, useEffect } from 'react';
import axios from 'axios';
import { handleFormCreate } from '../../services/crudServices';
import qs from 'qs'

// This was tested 28/02/2023 working delete as expected 
const InventoryForm = ({  onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    rekaStockId: '',
    productDescription: '',
    file: null,
    supplier: '',
    manufacturepn: '',
    quantity: 0,
    color: '',
    department: '',
    brands: '',
    store: '',
    status: 'draft',
    comments: '',
    likes: 0,
    shares: 0,
    costPrice: 0,
    salePrice: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('rekaStockId', formData.rekaStockId);
    formDataToSend.append('productDescription', formData.productDescription);
    formDataToSend.append('file', formData.file);
    formDataToSend.append('supplier', formData.supplier);
    formDataToSend.append('manufacturepn', formData.manufacturepn);
    formDataToSend.append('quantity', formData.quantity ? formData.quantity : 0);
    formDataToSend.append('color', formData.color);
    formDataToSend.append('department', formData.department);
    formDataToSend.append('brands', formData.brands);
    formDataToSend.append('store', formData.store); 
    formDataToSend.append('status', formData.status);
    formDataToSend.append('comments', formData.comments);
    formDataToSend.append('likes', formData.likes ? formData.likes : 0);
    formDataToSend.append('shares', formData.shares ? formData.shares : 0);
    formDataToSend.append('costPrice', formData.costPrice ? formData.costPrice : 0);
    formDataToSend.append('salePrice', formData.salePrice ? formData.salePrice : 0);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/inventory',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      setIsLoading(false);

      setFormData({
        rekaStockId: '',
        productDescription: '',
        file: null,
        supplier: '',
        manufacturepn: '',
        quantity: 0,
        color: '',
        department: '',
        brands: '',
        store: '',
        status: 'draft',
        comments: '',
        likes: 0,
        shares: 0,
        costPrice : 0,
        salePrice: 0,
      });

      console.log('response:', response);

      // if (onSuccess) {
      //   onSuccess(response.data);
      // }

    } catch (error) {
      console.log('error:', error);
      setIsLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="rekaStockId">Reka Stock ID</label>
            <input type="text" name="rekaStockId" value={formData.rekaStockId} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="productDescription">Product Description</label>
            <input
            type="text"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="costPrice">Cost (R)</label>
            <input type="text" name="costPrice"  
            value={formData.costPrice}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="salePrice">Sale (R)</label>
            <input
            type="text"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="file">Image</label>
            <input type="file" name="file" onChange={handleFileChange} />
        </div>
        <div>
            <label htmlFor="supplier">Supplier</label>
            <input type="text" name="supplier" value={formData.supplier} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="manufacturepn">Manufacture PN</label>
            <input type="text" name="manufacturepn" value={formData.manufacturepn} onChange={
                handleChange} />
        </div>
        <div>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="color">Color</label>
        <input type="text" name="color" value={formData.color} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="department">Department</label>
        <input type="text" name="department" value={formData.department} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="brands">Brands</label>
        <input type="text" name="brands" value={formData.brands} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="store">Store</label>
        <input type="text" name="store" value={formData.store} onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="status">Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
        </select>
        </div>
        <button type="submit" disabled={isLoading}>{isLoading ? 'Saving...' : 'Save'}</button>
    </form>
    );
};
            
export default InventoryForm;
