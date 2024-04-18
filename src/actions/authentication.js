import axios from "axios";
import { useEffect, useState } from "react";
import { _AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import toast from 'react-hot-toast'


export const UserLogin = () => {
    const [data, setData] = useState({email: "", password: ""});
    const {auth, setAuth} = _AuthContext();
    const [loading, setLoading] = useState(false);
    const router = useNavigate();

    const changeHandler = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const login = async() =>{
        setLoading(true);
        try {
            const res = await axios.post("login", data);
           
            if(res.status === 200){
                setAuth(res.data)
                router("/admin/dashboard")
                Cookies.set("auth",JSON.stringify(res.data))
                toast.success("Login Successful")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () =>{
        Cookies.remove("auth");
        setAuth({token: "", user: ""})
        router("/login");
    }
    return { login, data, loading, changeHandler, logout }
}

export const CurrentUser = () =>{
    const [data, setData] = useState({});
    const {auth} = _AuthContext();
    const AuthToken = auth && auth?.token;
    const [loading, setLoading] = useState(false);

    const currentuser = async() => {
        setLoading(true);
        try {
            const res = await axios.get("current-user");
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(AuthToken){
            currentuser()
        }
    },[AuthToken])

    return {currentuser, data, loading}
}

export const RegisterStaff = () => {
    const [data, setData] = useState({role: "", addedBy:"", email: "", password: "", gender:"", name: "", DOB: ""});
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const register = async() =>{
        setLoading(true);
        try {
            const res = await axios.post("/register-user", data);
           if(res.status === 200){
            toast.success("Staff added successfully")
           }
        } catch (error) {
            if(error.response.status === 400){toast.error("Email already exists")}
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return { register, data, loading, changeHandler }
}

export const GetUsers = () =>{
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const {auth} = _AuthContext();
    const AuthToken = auth && auth?.token;


   const getusers = async() =>{
    setLoading(true);
    try {
        const res = await axios.get("get-users");
        console.log(res);
        setData(res.data);
    } catch (error) {
        console.log(error);
    }
   }

   useEffect(()=>{
    if(AuthToken){
        getusers()
    }
   },[AuthToken])

   return {data}

}
