import React from 'react';

function Buttons({product, handleClick}) {
  return (
    <button onClick={() => handleClick(product)}>
      Add to Cart
    </button>

    // <div className="buttons">
    //   <div>
    //     <button>Add to Cart</button>
    //     <h4>Amount Left: </h4>
    //   </div>
    // </div>
  )
}

export default Buttons