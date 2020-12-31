import React from 'react'
import {Link,Redirect} from 'react-router-dom';

function Notfound() {
  return (
    <div>
      <Redirect to="/search"/>
    </div>
  )
}

export default Notfound
