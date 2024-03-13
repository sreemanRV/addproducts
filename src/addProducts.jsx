import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({ name: '', brand: '', size:"", image: null, price:Number });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('brand', product.brand);
        formData.append('imageFile', product.image);
        formData.append('price',product.price);
        formData.append('size',product.size);        
        
        try {
            await axios.post('http://localhost:5000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Handle success (e.g., showing a message, clearing the form)
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div className='container'>
            <div className='formcontainer'>
        <form className='form' onSubmit={handleSubmit}>
            <h3>Add products</h3>
            <input placeholder='Product name' type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
            <input placeholder='Product brand' type="text" value={product.brand} onChange={(e) => setProduct({ ...product, brand: e.target.value })} />
            <input placeholder='Product image' type="file" onChange={(e) => setProduct({ ...product, image: e.target.files[0] })} />
            <input placeholder='Product price' type="number" value={product.price} onChange={(e)=>setProduct({...product, price: e.target.value})} />
            <input placeholder='product size' type='number' value={product.size} onChange={(e)=> setProduct({...product, size: e.target.value})} />
            <button type="submit">Add</button>
        </form>
        </div>
        </div>
    );
};

export default ProductForm;