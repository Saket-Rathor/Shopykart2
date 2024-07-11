import React from 'react'
import "./thankyou.css"
import {useNavigate } from 'react-router-dom'
const Thankyou = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div class="content">
  <div class="wrapper-1">
    <div class="wrapper-2">
      <h1 className='ship'>Thank you !</h1>
      <p><i><b>Your order has been placed.</b></i></p>
      <button class="go-home" onClick={()=>{navigate("/home")}}>
      go home
      </button>
    </div>
    <div class="footer-like">
      <p>Visit us again!
       <a href="#">.Thankyou</a>
      </p>
    </div>
</div>
</div>
    </div>
  )
}

export default Thankyou
