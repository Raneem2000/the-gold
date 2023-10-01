import React, { useContext } from 'react'
import {User} from './../context/UserContext'
import { Navigate, Outlet ,useLocation} from 'react-router-dom';
import Login from './Login';

function RequireAuth() {
    const user = useContext(User);
    console.log(user);
    
    const location = useLocation();
     user.auth = localStorage.getItem('accessToken');
    return user.auth
    ? <Outlet /> 
    : <Navigate state={{from:location}} replace to="/login" />;
  }
  

export default RequireAuth