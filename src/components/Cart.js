import React from 'react'

function Cart(props) {
  const {cartItems,onAdd,onRemove}=props;
  return (
    <aside className="block col-1">
     {console.log(cartItems)}
    
      {cartItems.length ===0 &&<div><h2>Cart is empty</h2></div>}
      {
        cartItems.map((item)=>(
       <div key={item._id} className="row">
       <div className="col-2">{item.name}</div>
       <div className="col-2"><button onClick={()=>onAdd(item)} className="add">+</button>
       <button onClick={()=>onRemove(item)} className="remove"> - </button></div>
       <div className="col-2 text-right">{item.qty} * ${item.price}</div>
       </div>
        ))}

    </aside>
  )
}

export default Cart
