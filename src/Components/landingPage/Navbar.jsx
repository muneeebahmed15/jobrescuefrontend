import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import {Button} from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("#");
  return (
    <div className='fluid-container position-sticky shadow my-1' style={{top: 0, zIndex: 1000 }}>
    <div className=' container d-flex justify-content-between align-items-center'>
         <div><a href="#"><img src={logo} alt="logo" width={100} /></a></div>

            <ul className='d-flex justify-content-between align-items center list-unstyled mb-0'>
                <li className='list'>
                  <a href="#home" className='text-decoration-none'
                   onClick={()=>setActive("#")} style={{color: active === "#" ? "#feb47b" : "black"}}>
                    Home
                    </a></li>
                <li className='mx-5 list'>
                  <a href="#gallery" className='text-decoration-none'
                  onClick={()=>setActive("#gallery")} style={{color: active === "#gallery" ? "#feb47b" : "black"}}>
                  Gallery
                  </a></li>
                <li className='list'>
                  <a href="#about" className='text-decoration-none'
                  onClick={()=>setActive("#about")} style={{color: active === "#about" ? "#feb47b" : "black"}}>
                  About
                  </a></li>
                <li className='mx-5 list'>
                  <a href="#contact" className='text-decoration-none'
                  onClick={()=>setActive("#contact")} style={{color: active === "#contact" ? "#feb47b" : "black"}}>
                  Contact Us
                  </a></li>
            </ul>

         <div>
         <Button style={{marginRight: "10px"}}>
          <Link to={"/login"} className='text-decoration-none'>Login</Link>
          </Button>
         <Button type="primary">Signup</Button>
         </div>

    </div>
    </div>
  )
}

export default Navbar