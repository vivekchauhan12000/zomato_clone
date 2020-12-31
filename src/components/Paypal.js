import React,{useRef,useEffect,useState} from 'react'
import {Redirect} from 'react-router-dom';


export default function Paypal(props) {
 
  const [paid,Setpaid]=useState("");
  const paypal  = useRef()
   const {des,price}=props
   console.log(des+price);
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: des,
                amount: {
                  currency_code: "USD",
                  value: 8,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          
          Setpaid(order.status);
         // setTimeout(() => {  <Redirect to="/"/> }, 6000);

        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
     
  });

  return (
   <div>{<div ref={paypal}></div>}
 
     {paid=="COMPLETED" && <div><Redirect to="/"/> </div>}  

 </div>
  )
}
