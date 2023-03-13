import React from 'react';

function Product({ products }) {
  const {title, thumbnail, price, description } = products;

  return (
    <div className="container">
      <div className="product-grid">
        {products.map((item) => {
          <div className="prodcut-card">
        })}
      </div>
    </div>
  )
}