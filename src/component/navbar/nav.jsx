import React from 'react'
import "./nav.css"
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigate= useNavigate()
  return (
    <div>
      
<header>
        <a href="" class="logo"><img src="https://shenliktech.com/shen/assets/img/logo.png" alt=""/> <span>Shopykart.</span></a>

        <ul class="navbarr">
            <li><a href="#home" class="active">Home </a></li>
        </ul>

        <div class="mainn">
           <img  style={{cursor:"pointer"}} onClick={()=>navigate("/checkout")}src="/src/assets/checkout.png" alt="img" srcset="" />
        </div>
    </header>
    </div>
  )
}

export default Nav
