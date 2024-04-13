import React from 'react'
import { MenuOutlined, LoginOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className='header d-flex justify-content-between align-items-center px-4' style={{marginLeft: "0"}}>
      
        <div>
        <MenuOutlined style={{fontSize: "25px"}}/>
        </div>
        
        <h4>Welcome, Admin</h4>

        <div>
        <LoginOutlined style={{fontSize: "25px"}}/>
        </div>
    </div>
  )
}

export default Header
