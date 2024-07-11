import React from 'react'
import "./form.css";
const Form = ({modelisOpen,setmodalIsOpen}) => {
  return (
    <div>
      <div class="container">
  <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>
  <hr />
 <form onSubmit={(e)=>{e.preventDefault();setmodalIsOpen(true)}}><div class="form">
    
  <div class="fields fields--2">
    <label class="field">
      <span class="field__label" for="firstname"><b>First name</b></span>
      <input class="field__input" type="text" id="firstname" required autoComplete='off'/>
    </label>
    <label class="field">
      <span class="field__label" for="lastname"><b>Last name</b></span>
      <input class="field__input" type="text" id="lastname" required autoComplete='off'/>
    </label>
  </div>
  <label for="email">Enter your email:</label>

<input type="email" id="email" pattern=".+@gmail\.com" size="30" required />
  <label class="field">
    <span class="field__label" for="address"><b>Address</b></span>
    <input class="field__input" type="text" id="address" required autoComplete='off'/>
  </label>
  <label class="field">
    <span class="field__label" for="country"><b>Country</b></span>
    <select class="field__input" id="country">
      <option value=""></option>
      <option value="unitedstates">United States</option>
      <option value="unitedstates">India</option>
    </select>
  </label>
  <div class="fields fields--3">
    <label class="field">
      <span class="field__label" for="zipcode"><b>Zip code</b></span>
      <input class="field__input" type="number" id="zipcode" />
    </label>
    <label class="field">
    <span class="field__label" for="country"><b>State</b></span>
    <select class="field__input" id="country">
      <option value=""></option>
      <option value="unitedstates">California</option>
      <option value="unitedstates">Delhi</option>
    </select>
  </label>
  <label class="field">
    <span class="field__label" for="country"><b>City</b></span>
    <select class="field__input" id="country">
      <option value=""></option>
      <option value="unitedstates">Los Angeles</option>
      <option value="unitedstates">New Delhi</option>
    </select>
  </label>
  </div>
  </div>
  <hr/>
  <button type='submit' class="button">Continue</button>
  </form> 
</div>
    </div>
  )
}

export default Form
