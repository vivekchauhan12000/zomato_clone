import React,{ useState, useEffect } from 'react'
import Header from "../components/Header"
import Tabs from "../components/DetailTabs"
import Carousel from 'react-elastic-carousel';




export default function Detail(props){
  const [data, setData] = useState([]);
  const [main ,setMain] =useState([]);
 
  const id =props.match.params.id


  useEffect( async () => {
    const response = await fetch("https://fooddoor.herokuapp.com/location");
    const data = await response.json();
    data.filter((val)=>{
      if(val._id.toLowerCase().includes(id.toLowerCase())){
        return val}
     }).map(val=>(setMain(val)))
   await setData(data);
    
    
  },[]);
  
  
 

 return(
    <div>
     <div>
    <Header/>

    <div style={{padding:"10px",margin:"5px"}}>
    <Carousel>
    <img src={main.img} style={{height: '300px', width: '990px',margin:'50px'}} className="card-img-top row align-items-center" alt="..."/>
  
    <img src={main.restoImg} style={{height: '300px', width: '990px',margin:'50px'}} className="card-img-top row align-items-center" alt="..."/>
  </Carousel>
  </div>
   
    
   
    
    <div style={{margin:'20px'}}>
<h2> {main.name} </h2>

   
     <Tabs name={main.name} location={main.location} des={main.description} food={main.food} phone={main.contactNo}/>
    
     </div>
     </div>
    </div>
  
  )
}


