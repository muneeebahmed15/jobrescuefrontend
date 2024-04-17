import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const AuthContext = createContext();

export const _AuthContext = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({token: "", user: "" });


    useEffect(()=>{
      let user =  Cookies.get("auth"); 
     
      if(user){
          setAuth(JSON.parse(user))
      }
    },[])

    axios.defaults.baseURL = "https://jobrescuebackend.vercel.app/v1/rescue";
    axios.defaults.headers.common["Cookies"] = auth.token;

  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>
}

export default AuthProvider;
