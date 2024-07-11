import React, { useEffect, useState } from "react";
import axios from "axios"
import "./checkout.scss";
import Form from "../checkoutform/form";
import Footer from "../footer/footer";
import Model from "../model/model";
import ReactModal from "react-modal";
const checkout = () => {
  const [products, setproducts] = useState([]);
  const [total,settotal] = useState(0)
  const [modalIsOpen,setmodalIsOpen]= useState(false)

  useEffect(() => {
    const items = sessionStorage.getItem("savedProducts");
    const products = JSON.parse(items) 
    setproducts(JSON.parse(items));
    console.log(products)
    let totalPrice = 0 
    products.forEach(item => {totalPrice += item.price

      
    });
    console.log(totalPrice);
    settotal(totalPrice)


  }, []);

  return (
    <>
    <ReactModal
        isOpen={modalIsOpen}
        
      >
        <Model total={total}/>
         </ReactModal>

    <div>
      <header>
        <h3>Checkout</h3>
      </header>

      <main className="main-container" >
        <section class="checkout-details">
          <div class="checkout-details-inner">
            <div class="checkout-lists">
              {products?.map((item, index) => {
                return <div class="card">
                  <div class="card-image">
                    <img src={item.img} alt="" />
                  </div>
                  <div class="card-details">
                    <div class="card-name">{item.title}</div>
                    <div class="card-price">
                      {" "}
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>;
              })}
            </div>
            
            <div class="checkout-total">
              <h6>Total</h6>
              <p>{`₹${total}`}</p>
            </div>
          </div>
        </section>
        <section>
        <Form modalIsOpen={modalIsOpen}setmodalIsOpen={setmodalIsOpen}/>
        </section>
      </main>
    </div>
   
    <Footer/>
    </>
  );
};

export default checkout;
