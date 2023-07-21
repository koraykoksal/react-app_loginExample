import React from 'react'
import Contact from '../pages/Contact';
import { Login } from '../pages/Login';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

export const PrivateRouter = ({user}) => {


  return user ? <Outlet/> : <Navigate to="/login"/>
  
}
