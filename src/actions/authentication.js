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
            const res = await axios.post("https://rescuebackend.vercel.app//v1/rescue/login", data);
           
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
            // console.log(res);
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
    const [loading, setLoading] = useState(false);
    const router = useNavigate();
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        DOB: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
        role:"",
        otherRole:"",
        availability: [""],
        file: null,
        password: "",
        notes: ""
    });

    // console.log(data);

    const fileHandler = (e) =>{
        setData({...setData, file: e.target.files[0]});
    }

    const changeHandler = (e) =>{
        setData({...data, [e.target.name]: e.target.value});
    }

    const checkHandler = (checkedValues) => {
        setData({ ...data, availability: checkedValues });
    }

    const register = async() =>{
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('firstName', data.firstName);
            formData.append('lastName', data.lastName);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('address', data.address);
            formData.append('DOB', data.DOB);
            formData.append('emergencyContactName', data.emergencyContactName);
            formData.append('emergencyContactNumber', data.emergencyContactNumber);
            formData.append('role', data.role);
            formData.append('otherRole', data.otherRole);
            formData.append('availability', JSON.stringify(data.availability));
            formData.append('file', data.file);
            formData.append('password', data.password);
            formData.append('notes', data.notes);

            const res = await axios.post("/register-user", formData);
            console.log(res);
           if(res.status === 200){
            toast.success("Staff added successfully");
            setData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                DOB: "",
                emergencyContactName: "",
                emergencyContactNumber: "",
                role:"",
                otherRole:"",
                availability: [""],
                photo: "",
                password: "",
                notes: ""
            });
            router("/admin/employees")
           }
        } catch (error) {
            // if(error.response.status === 400){toast.error("Email already exists")}
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return { register, data, checkHandler, fileHandler, loading, changeHandler }
}

export const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { auth } = _AuthContext();
  const AuthToken = auth && auth?.token;

  const getusers = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get("get-users")
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

//   console.log(users);

  useEffect(() => {
    if (AuthToken) {
      getusers();
    }
  }, [AuthToken]);


  return { users, loading };
};

export const SingleUser = (id) =>{
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const router = useNavigate()

    const singleUser = async() =>{
        setLoading(true);
        try {
            const res = await axios.get(`single-user/${id}`);
            const {data} = res;
            if(res.status === 200){
                setData(data)
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(id)
        singleUser();
    },[id])

    return { loading, data}
}


export const DeleteUser = () =>{
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const router = useNavigate()

    const deleteUser = async(id) =>{
        setLoading(true);
        try {
            const res = await axios.get(`single-user/${id}`);
            const {data} = res;
            if(res.status === 200){
                toast.success("Staff Deleted Successfully");
                router("/admin/employees");
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return { loading, deleteUser }
}

