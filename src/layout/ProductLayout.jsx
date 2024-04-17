import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ProductLayout = ({ children }) => {
  return (
    <div className="product-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ProductLayout;
