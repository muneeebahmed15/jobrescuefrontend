import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { UserLogin } from '../../actions/authentication';
import { _AuthContext } from '../../actions/AuthContext';

const Login = () => {
  const {login, data, loading, changeHandler} = UserLogin();
  const router = useNavigate();

  const {auth} = _AuthContext();
  const authToken = auth && auth?.token;
  
// console.log(auth.token);

  return authToken ? router("/admin/dashboard") : (
    <div className='d-flex justify-content-center align-items-center ' style={{height: "100vh"}}>
    <div className='frame px-4 d-flex flex-column justify-content-center align-items-center'>

       
        <img src={logo} alt="logo" width={150}/>

        <h3>Login</h3>
        <div>
      <label className='form-label mt-1'>Email</label>
    <Input type='email' size="large" name='email' value={data.email} onChange={changeHandler} placeholder="Email" prefix={<UserOutlined />} />
      <label className='form-label mt-2'>Password</label>
    <Input type='password' size="large" name='password' value={data.password} onChange={changeHandler} placeholder="Password" prefix={<UserOutlined />} />
    <label className='forget-password'>Forget Password</label>
    </div>

    <Button className='mt-3' type="primary" block onClick={login}>
      {loading ? "loading..." : "Login"}
    </Button>
    </div>
    </div>
  ) 
}

export default Login
