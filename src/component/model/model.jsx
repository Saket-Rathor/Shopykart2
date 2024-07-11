import React from 'react'
import "./model.css"
import Thankyou from '../thankyou/thankyou';
import { useNavigate } from 'react-router-dom';
const Model = ({total}) => {
  const navigate = useNavigate()
  return (
    <div>
 
  <div class="credit-card-form">
    <h2>PAYMENT PORTAL</h2>
<img class="Image1" src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png" alt="6375aad33dbabc9c424b5713-card-mockup-01" border="0"/>
  
    <form onSubmit={(e)=>{e.preventDefault();navigate("/Thankyou")}}> 
      <div class="form-group">
        <label for="card-number">Card Number</label>
        <input type="number"  placeholder="Card number" required autoComplete='off'/>
      </div>
      <div class="form-group">
        <label for="card-holder">Card Holder</label>
        <input type="text" id="card-holder" placeholder="Card holder's name" required autoComplete='off'/>
      </div>
      <div class="form-row">
        <div class="form-group form-column">
          <label for="expiry-date">Expiry Date</label>
          <input type="date" id="expiry-date" placeholder="MM/YY" required autoComplete='off'/>
        </div>
        <div class="form-group form-column">
          <label for="cvv">CVV</label>
          <input type="number" id="cvv" placeholder="CVV" required autoComplete='off'/>
        </div>
      </div>
      <button type="submit" class="click-button" onclick="showLoading(event, this)">PAY NOW - ₹{total}</button>
    </form>
  </div>

    </div>
  )
}

export default Model
