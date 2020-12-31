import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {logout,isAuthenticated}=useAuth0();
  return (
    isAuthenticated &&(
    <button className="btn btn-danger" style={{borderRadius:"40px",borderColor:"white",padding:"10px",margin:"5px"}} onClick={()=>logout()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-door-closed-fill" viewBox="0 0 20 20">
  <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> Logout
    </button>
    )
  )
}

export default LogoutButton
