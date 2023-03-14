import React, {useState} from 'react'
import Button from "./Buttons.js"

function Inventory() {
  const [inventory, setInventory] = useState({product1: 5})

  const handleAddToCart = (product) => {
    setInventory((prevState) => ({
      ...prevState,
      [product]: prevState[product] - 1,
    }))
  }

  return(
    <div className="App">
      {Object.keys(inventory).map((product) => (
        <div key={product}>
          <Button product={product} handleClick={handleAddToCart} />
          <p>Inventory: {inventory[product]}</p>
        </div>
      ))}
    </div>
  )
}

export default Inventory;