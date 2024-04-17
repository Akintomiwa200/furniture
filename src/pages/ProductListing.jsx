import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import FilterOptions from '../components/FilterOptions';

const ProductListing = () => {
  // State to hold the list of products
  const [products, setProducts] = useState([]);

  // Fetch products from API or database
  useEffect(() => {
    // Simulated fetch for demonstration purposes
    const fetchProducts = async () => {
      // You can replace this with your actual API call
      const response = await fetch('https://api.example.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {/* Render filter options component */}
      <FilterOptions />
      {/* Render the list of products */}
      <ProductList products={products} />
    </div>
  );
};

export default ProductListing;
