import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Loginbutton = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  return (
    !isAuthenticated &&(
    <button className="btn btn-danger" style={{borderRadius:"40px",borderColor:"white",padding:"10px",margin:"5px"}} onClick={()=> loginWithRedirect()}>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 20 20">
  <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
</svg> Login In
    </button>
    )
  )
}

export default Loginbutton
