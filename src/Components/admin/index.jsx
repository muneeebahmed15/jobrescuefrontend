import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Layout from '../layout';
import { _AuthContext } from '../../actions/AuthContext';
import { CurrentUser } from '../../actions/authentication';
import Redirecting from '../../UI/Redirecting';

const Admin = () => {
  const [data, setData] = useState({});
  const {auth} = _AuthContext();
  const AuthToken =  auth && auth?.token;
  const {currentuser } = CurrentUser();



useEffect(()=>{
    if(AuthToken){
        currentuser()
    }
},[auth && AuthToken])

  return AuthToken ? <Layout> <Outlet/> </Layout> : <Redirecting/> 
  
}

export default Admin