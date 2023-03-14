import React, { useState, useEffect } from 'react';
import Search from './Search.js'
import Product from './Product.js'
import './App.css'

function ElectronicPage() {
  const [products, setProduct] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then(res => res.json())
      .then(data => setProduct(data.products))
      .catch(error => console.error(error))
  }, []);

   const showProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })

  return(
    <>
    <h1>This Weeks Featured products</h1>
    <Search search={search} onSearchChange={setSearch}/>
    <Product products={showProducts} />
    </>
  );
}

export default ElectronicPage
