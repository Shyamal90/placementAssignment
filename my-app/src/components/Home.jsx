import React from 'react'
import {useEffect, useState} from 'react'
import { data } from './data'
import {useNavigate} from 'react-router-dom'

function Home() {
    let nevigate = useNavigate();
    let [products,setProducts] = useState([...data])
    let [cartData,setCartData] = useState(()=>{
      let data = JSON.parse(localStorage.getItem("Carts")) || [];
      return data;
    })
     console.log("cartData ",cartData)
  
  
    // define handleRating
    const handleRating = (rating) => {
      let filterArr = products.filter((product)=>{
           return product.rating == rating
      })
  
      setProducts(filterArr)
    }
  
  
    //define handleDiscount
    const handleDiscount = (discount) => {
      let filterArr = products.filter((product)=>{
        return product.discounts == discount
   })
  
      setProducts(filterArr)
    }
  
    //handleAddToCard
    const handleAddToCard = (product) => {
      cartData = [...cartData,product];
      localStorage.setItem("Carts",JSON.stringify(cartData));
    }
  
    return (
      <div className="App">
        <h1>Shopping Mall</h1>
        <a href=""onClick={()=>nevigate("/checkOut")}>CheckOut Page</a>
        {/* Option for select location */}
        <div className="locationSection">
          <select name="" id="">
            <option value="--">Selet Location</option>
            <option value="bangalore">Bangalore</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="rajesthan">Rajesthan</option>
            <option value="pune">Pune</option>
            <option value="chennia">Chennia</option>
          </select>
        </div>
  
  
        <div className="container">
          <div className="filterSection">
            <h3>Filter By</h3>
            <div className="ratingSection">
              <h5>Rating</h5>
              <ul>
                <li onClick={()=>handleRating(5.0)}>5.0</li>
                <li onClick={()=>handleRating(4.8)}>4.8</li>
                <li onClick={()=>handleRating(4.7)}>4.7</li>
                <li onClick={()=>handleRating(4.5)}>4.5</li>
                <li onClick={()=>handleRating(4.2)}>4.2</li>
                <li onClick={()=>handleRating(4.0)}>4.0</li>
                <li onClick={()=>handleRating(3.7)}>3.7</li>
                <li onClick={()=>handleRating(3.5)}>3.5</li>
  
              </ul>
            </div>
  
            <div className="paymentOption">
              <h5>Payment </h5>
              <ul>
                <li>UPI</li>
                <li>Net Banking</li>
                <li>Google Pay</li>
                <li>COD</li>
              </ul>
            </div>
  
  
            <div className="discountSection">
              <h5>Discounts</h5>
              <ul>
                <li onClick={()=>handleDiscount(20)}>20%</li>
                <li onClick={()=>handleDiscount(18)}>18%</li>
                <li onClick={()=>handleDiscount(16)}>16%</li>
                <li onClick={()=>handleDiscount(15)}>15%</li>
                <li onClick={()=>handleDiscount(12)}>12%</li>
                <li onClick={()=>handleDiscount(10)}>10%</li>
              </ul>
            </div>
          </div>
          <div className="productSection">
  
            {/* <div className="productContainer">
              <div className="imageSection"></div>
              <div className="productDetails">
                <h3>Product 1</h3>
                <p><span>Rating:</span> 4.3</p>
                <p><span>Sold By:</span> Shop 1</p>
                <p><span>Discounts:</span> 15%</p>
                <p><span>Payment Options :</span> COD | Net Banking | UPI</p>
              </div>
            </div> */}
            {
              products.length === 0 ? <h1 style={{fontSize:"12"}}>No data found!!!</h1> :products.map((product) => {
                return(
                <div className="productContainer">
                  <div className="imageSection"></div>
                  <div className="productDetails">
                    <h3>{product.name}</h3>
                    <p><span>Rating:</span> {product.rating}</p>
                    <p><span>Sold By:</span> {product.sold_by}</p>
                    <p><span>Discounts:</span> {product.discounts}%</p>
                    <p><span>Payment Options :</span> {product.payment_options.join(" | ")}</p>
                    <button className='cartBtn' onClick={()=>handleAddToCard(product)}>Add to Cart</button>
                  </div>
                </div>
                )
              })
            }
  
          </div>
        </div>
      </div>
    );
}

export default Home
