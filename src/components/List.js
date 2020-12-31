import React, { useState, useEffect } from "react";
import Card from "./Card";


  


export default () => {
  //const [count, setCount] = useState(0);
 

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  
  

  // Similar to componentDidMount and componentDidUpdate:
  useEffect( async () => {
    const response = await fetch("http://localhost:4000/location");
    const data = await response.json();
    console.log(data);
   await setData(data);
    setLoading(false);
    
  },[]);
  
  

  return (
   

<div>
  {data.map(datas=>(
<div className="card" style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', transition: '0.3s', width: '360px', height: '160px', display: 'flex', flexDirection: 'row', margin: '20px'}}>
  <img src="https://cdn.zeplin.io/5ea9214f6ba7e327178817d0/assets/661FC106-80E1-4186-9349-105A53FB8F0D.png" style={{height: '100%', width: '40%'}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{datas.name}</h5>
<p className="card-text">{datas.location}</p>
<p className="card-text">{datas.food}</p>

  </div>
</div>
  ))}
</div>
     
  );
};