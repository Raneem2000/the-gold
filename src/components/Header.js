import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

    function handleLogout(){
        window.localStorage.removeItem('accessToken');
        window.location.pathname = '/';
    }
  return (
    <div className="navbar">
    <div className="navbar-left">
        <Link to='/' className='a'>Home</Link>
        <Link to='/about' className='a'>About</Link>
    </div>
    
    <div className="navbar-right">
    {window.localStorage.getItem ('accessToken')
    ?   <Link to='/logout' onClick={handleLogout} className='a'>Logout</Link>

    :    <Link to='/login' className='a'>Sign In</Link>

    }
    <Link to='/dashboard' className='a'>Dashbaord</Link>
    

    
    
        
    </div>
    </div>
)
}

export default Header