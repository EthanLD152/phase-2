import React from 'react';


function Product({ products }) {

  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => {
          const {title, thumbnail, price, description } = product;
          return(
          <div className="prodcut-card" key={product.id}>
            <h1>{title}</h1>
            <img src={thumbnail} alt={title}/>
              <div className="product-info">
                <p>${price}</p>
                <p>{description}</p>
              </div>
          </div>
        )
        })}
      </div>
    </div>
  )
}

export default Product