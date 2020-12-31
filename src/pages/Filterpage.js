import React,{ useState, useEffect } from 'react'
//import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import {toast} from "react-toastify"
import "./filterpage.css";
import FilterCard from "../components/FilterpageCard";
import Header from "../components/Header";
//import Cart from "../components/Cart";
import Paypal from "../components/Paypal"
import { useAuth0 } from '@auth0/auth0-react';

toast.configure();
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Filterpage(props) {
  //const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [SearchTerm,SetSearchTerm]=useState("");
  const [location,Setlocation]=useState("");
  //const [CartItem,setCartItems]=useState([]);
  //const [pricelist,SetPricelist]=useState("");
  const [din , Setdin]=useState("");
  const [snacks,Setsnacks]=useState("");
  const [dinner,Setdinner]=useState("");
  const [range,Setrange]=useState("");
  const [veg,Setveg]=useState("");


  const [cart,setCart]=useState([]);
  const [page,setPage]=useState(PAGE_PRODUCTS);
  const[checkout,SetCheckout]=useState(false);

  const [product,setProduct]= useState([

  ]);
  

  useEffect( async () => {
    const response = await fetch("https://fooddoor.herokuapp.com/location");
    const data = await response.json();
    console.log(data);
   await setProduct(data);
    
    
  },[]);
  

  const comparePrice=(a,b)=>{
  return a-b
  };
   
  const renderProducts = () =>(
    <div className="container">
      
      
  <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="🔍Search for restaurant" onChange={(event)=>{SetSearchTerm(event.target.value)}} />
 
    <div className="co" style={{ display: "flex",flexDirection:"row"}}>
   
      <div className="col-4">
      
     <div className="column">
      <div className="filter">
        <div className="container">
          <h4><b>Filter location</b></h4>
          <p> Select Location</p>
          <input list="browsers" name="myBrowser" placeholder="City name" onChange={(event)=>{Setlocation(event.target.value)}}/>
          <datalist id="browsers">
            <option value="Mumbai">
            </option><option value="Jaipur">
            </option><option value="Lucknow">
            </option><option value="Pune">
            </option></datalist>
          <h4>Cusine</h4>
          <input type="checkbox"   value="Breakfast" onChange={(event)=>{Setdin(event.target.value)}} />
          <label htmlFor="vehicle1"> Breakfast</label><br />
          <input type="checkbox"  value="Snacks"  onChange={(event)=>{Setsnacks(event.target.value)}}/>
          <label htmlFor="vehicle2"> Snacks</label><br />
          <input type="checkbox"  value="Dinner" onChange={(event)=>{Setdinner(event.target.value)}}/>
          <label htmlFor="vehicle3"> Dinner</label><br />
          <h4>Range</h4>
          <input type="radio" value="200" name="Range" onChange={(event)=>{Setrange(event.target.value)}}/>
          <label htmlFor="radio"> 0-200</label><br />
          <input type="radio" value="800" name="Range" onChange={(event)=>{Setrange(event.target.value)}} />
          <label htmlFor="radio">200-800</label><br />
          <input type="radio"  name="Range" value="2000" onChange={(event)=>{Setrange(event.target.value)}} />
          <label htmlFor="radio">800-2000</label><br />
          <input type="radio"  name="Range" value="2001" onChange={(event)=>{Setrange(event.target.value)}} />
          <label htmlFor="radio">2000+</label><br />
          <h4>Type</h4>
          <input type="radio"  name="veg" value="veg" onChange={(event)=>{Setveg(event.target.value)}}/>
          <label htmlFor="radio">Vegitarian</label><br />
          <input type="radio" name="veg" value="non-veg" onChange={(event)=>{Setveg(event.target.value)}}/>
          <label htmlFor="radio">Non-vegitarian</label><br />
        </div>
      </div>
      </div>
     
      </div>
      <div className="col-6">
      {product.filter((val)=>{
        if(veg==""){
          return val
        }else if (val.foodVeg.toLowerCase()==veg.toLowerCase()){
          return val
        }
      }).filter((val)=>{
     if(range==""){
    
    return val}else if (range==="200" && val.price>0 && val.price<=200){
    
      return val
    } else if (range==="800" && val.price>200 && val.price<=800){
    
      return val
    }
    else if (range==="2000" && val.price>800 && val.price<=2000){
    
      return val
    }
    else if (range==="2001" && val.price>1999){
    
      return val
    }
 }).filter((val)=>{
     if(dinner==""){
    
    return val}else if (val.foodType.toLowerCase().includes(dinner.toLowerCase())){
    
      return val
    }
 }).filter((val)=>{
     if(snacks==""){
    
    return val}else if (val.foodType.toLowerCase().includes(snacks.toLowerCase())){
    
      return val
    }
 }).filter((val)=>{
     if(din==""){
    
    return val}else if (val.foodType.toLowerCase().includes(din.toLowerCase())){
    
      return val
    }
 }).sort((a,b) =>(a.price-b.price)).filter((val)=>{
        if(location==""){
          return val
        }else if (val.location.toLowerCase().includes(location.toLowerCase())){
          return val
        }
      }).filter((val)=>{
     if(SearchTerm==""){
    
    return val}else if (val.name.toLowerCase().includes(SearchTerm.toLowerCase())){
    
      return val
    }
 }).map((product,idx)=>(
       
        <div className="column" key={product._id}>
          <FilterCard id={product._id} name={product.name} location={product.location} food={product.food} img={product.img} restoRating={product.restoRating} price={product.price}/>

        
        
         <button className="buybutton btn btn-success" onClick={() => addToCart(product)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 20 20">
  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"/>
</svg>  add to cart</button>
       </div>
 
       ))}
       </div>
    </div>
    </div>
   
  );
  
  const addToCart= (product) => {
    console.log('added to cart');
    setCart([...cart, {...product}]);
  };


  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product)=> product !== productToRemove)
    );
   };
 
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }
  
  
 
  const {logout,isAuthenticated}=useAuth0();
   const renderCart = () =>(
     
    isAuthenticated &&(
     <div className="background">
       
       {cart.length ===0 &&<div><h2>Cart is empty</h2></div>}
      
        
        {cart.map((product,idx)=>(
         
         <div className="card" key={idx}>
           <img id="img" src={product.img} alt={product.name} style={{height:"100px",width:"100px"}}/>
          <h4>{product.name}</h4>
         
          <h4>Price: {product.price}</h4>
          <h4> {product.food}</h4>
          <h4>{product.contact}</h4>
         
          <button className="btn btn-danger" onClick={()=> removeFromCart(product)}>remove from cart</button>
         
         {checkout ? (
            <Paypal des={product.food} price={String(product.price)}/>
            
          ) : (

          <button className="btn btn-success" onClick={()=>{SetCheckout(true)}} >CheckOut</button>)}
        </div>
           
        ))}
        
     </div>
    )||<div> <h2>Please Log in to access checkout</h2></div>
   );

  return (
    <div>
      <>
       <Header/>
       
 
 
  <div className="column">
    
   
    <button className="btn btn-success col-2" style={{margin:"10px",alignItems:"end"}} onClick={()=>navigateTo(PAGE_CART)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shop" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg> Go to Cart ({cart.length}) </button>
   
    
    <button className="btn btn-primary col-2" onClick={()=>navigateTo(PAGE_PRODUCTS)}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg> Go to Home page  </button>
      
   
       
    
  </div>
</>
     {page === PAGE_PRODUCTS && renderProducts()}
     {page === PAGE_CART && renderCart()}
    </div>
  )
}

export default Filterpage
