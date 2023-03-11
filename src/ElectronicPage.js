import React, { useState, useEffect } from 'react';

function ElectronicPage() {
  const [products, setProduct] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then(res => res.json())
      .then(data => setProduct(data.products))
      .catch(error => console.error(error))
  }, []);

  return(
    <>
    <h2>Product Catelog</h2>
    </>
  );
}

export default ElectronicPage
