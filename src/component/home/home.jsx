import React from 'react'
import "./home.scss"
import { useNavigate } from 'react-router-dom'
import Nav from '../navbar/nav'
import Footer from '../footer/footer'
function Card(props) {
  const addToSession=()=>{
    const ifProductPresent=sessionStorage.getItem("savedProducts")
    if(!ifProductPresent){
      const productArray=[]
      productArray.push(props)
      sessionStorage.setItem("savedProducts",JSON.stringify(productArray))
      alert("product Added to cart")
      return
    }
    const newProductArray= [...JSON.parse(ifProductPresent),props]
    sessionStorage.setItem("savedProducts",JSON.stringify(newProductArray))
    alert("product Added to cart")
  }
    return (
      <div className="card">
        <img src={props.img} className="card__img" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <h3 className="card__price">{`₹${props.price}`}</h3>
          <button onClick={addToSession} className="card__btn">Add to Cart</button>
        </div>
      </div>
    )

}
const home = () => {
 
  return (
<>
<Nav/>
    <div>
       <h2 style={{cursor:"pointer"}} onClick={()=>navigate("/checkout")}></h2>
        <div className="wrapper">
      <Card
        img="https://th.bing.com/th/id/OIP.jbrtYMKuRYFcZ_f_XWUyWwHaEo?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        title="Bag pack"
        description="Fall Favorite • Casual Bag"
        price= {4500}
        id="1"
      />

      <Card
        img="https://th.bing.com/th/id/OIP.vpPHoUj4aASli6yteVyfkAHaEK?w=281&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        title="Nike Jordon"
        description="Winter Season • Casual"
        price={5900}
        id="2"
      />
      <Card
        img="https://www.soccerbible.com/media/42470/rv4.jpg"
        title="Nike Studs"
        description="Football Studs • Verstile"
        price={4400}
         id="3"
      />
      <Card
        img="https://c8.alamy.com/comp/2RKE494/lille-france-24th-aug-2023-illustration-of-the-kipsta-match-ball-during-the-uefa-europa-conference-league-match-between-lille-olympique-sporting-club-and-hnk-rijeka-played-at-stade-pierre-mauroy-on-august-24-2023-in-lille-france-photo-by-matthieu-mirvillepressinphoto-credit-pressinphoto-sports-agencyalamy-live-news-2RKE494.jpg"
        title="Kipsta Football"
        description="Football • Turf"
        price={2900}
         id="4"
      />
    </div>
    </div>
    <div>
       <h2 style={{cursor:"pointer"}} onClick={()=>navigate("/checkout")}></h2>
        <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1612077330269-788066d5ba58?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
        title="Tie Up Boots  "
        description="Fall Favorite • Boots Summer"
        price= {4500}
        id="1"
      />

      <Card
        img="https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        title="Full Sweater"
        description="Sweater Season • Cozy"
        price={2500}
        id="2"
      />
      <Card
        img="https://images.unsplash.com/photo-1475178626620-a4d074967452?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
        title="Slim Demin"
        description="slim-fit Demin • Verstile"
        price={1900}
         id="3"
      />
      <Card
        img="https://images.unsplash.com/photo-1569235080412-01b4eefa5fbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        title="White Kurti"
        description="Shirt For Women • Lacey"
        price={2300}
         id="4"
      />
    </div>
    </div>
    <Footer/>
    </>
  )
}



export default home
