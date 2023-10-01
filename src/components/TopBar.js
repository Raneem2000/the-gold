import React from 'react'
import { Link } from 'react-router-dom'

function TopBar() {
  return (
<>
<div className="navbar topbar">
    <div className="navbar-left">
    <i className="fa-solid fa-ring"></i>
       <h1 style={{color:'gold', fontFamily:'cario', fontSize:'3rem'}}>Gold</h1>
    </div>
    
    <div className="go ">
    <Link to='/' style={{color:"#99880a"}} className='a'>Go to website</Link>  
    </div>
    </div>
</> 
)
}

export default TopBar