import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Pages/Dashboard/Dashboard.css'
function SideBar() {
  return (
    <div className='side-bar'>
    <NavLink 
      to='/dashboard/categories' 
      className='side-item'>
        <i className="fa-solid fa-eye"></i>Categories
    </NavLink>
    {/* <NavLink 
      to='/dashboard/user/create' 
      className='side-item'>
        <i className="fa-solid fa-user-plus"></i>new User
    </NavLink> */}
    </div>
  )
}

export default SideBar