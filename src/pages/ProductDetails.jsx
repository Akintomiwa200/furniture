import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // State to hold the product details
  const [product, setProduct] = useState(null);
  
  // Accessing URL parameters with useParams hook
  const { id } = useParams();

  // Fetch product details from API or database
  useEffect(() => {
    // Simulated fetch for demonstration purposes
    const fetchProductDetails = async () => {
      // You can replace this with your actual API call
      const response = await fetch(`https://api.example.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductDetails();
  }, [id]);

  // Display loading message while fetching data
  if (!product) {
    return <div>Loading...</div>;
  }

  // Render product details
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* You can add more details here */}
    </div>
  );
};

export default ProductDetails;
