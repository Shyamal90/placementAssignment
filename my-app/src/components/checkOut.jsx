import React, { useState } from 'react'

function CheckOut() {
    let [cartData,setCartData] = useState(()=>{
        let data = JSON.parse(localStorage.getItem("Carts")) || [];
        return data;
    })

    console.log("CheckOut pAGE " ,cartData)
  return (
    <>
      <div className="checkOutContainer">
          <h2>Shopping Mall</h2>
          <h4>CheckOut Page</h4>
          <div className="selectedItems">
              <h1>Selected Items</h1> 
              {
              cartData.length === 0 ? <h1 style={{fontSize:"12"}}>No data found!!!</h1> :cartData.map((product) => {
                return(
                <div className="productContainer">
                  <div className="imageSection"></div>
                  <div className="productDetails">
                    <h3>{product.name}</h3>
                    <p><span>Rating:</span> {product.rating}</p>
                    <p><span>Sold By:</span> {product.sold_by}</p>
                    <p><span>Discounts:</span> {product.discounts}%</p>
                    <p><span>Payment Options :</span> {product.payment_options.join(" | ")}</p>
                    
                  </div>
                </div>
                )
              })
            }
          </div>
      </div>
    </>
  )
}

export default CheckOut
