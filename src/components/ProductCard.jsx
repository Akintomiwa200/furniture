import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {/* Add more product details as needed */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
