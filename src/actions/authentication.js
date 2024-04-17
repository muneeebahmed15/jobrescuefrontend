import axios from "axios";
import { useEffect, useState } from "react";
import { _AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';



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
           
            setData(res.data)
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