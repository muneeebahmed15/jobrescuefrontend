import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Button } from 'antd';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{height: "100vh"}}>
    <div className='frame px-4 d-flex flex-column justify-content-center align-items-center'>

        <img src={logo} alt="logo" width={150}/>

        <h3>Login</h3>

        <div>
      <label className='form-label mt-1'>Email</label>
    <Input type='email' size="large" placeholder="Email" prefix={<UserOutlined />} />
      <label className='form-label mt-2'>Password</label>
    <Input type='password' size="large"  placeholder="Password" prefix={<UserOutlined />} />
    <label className='forget-password'>Forget Password</label>
    </div>

    <Button className='mt-3' type="primary" block>
    <Link to={"/admin/dashboard"} className='text-decoration-none'>  Login</Link>
    </Button>
    </div>
    </div>
  )
}

export default Login
