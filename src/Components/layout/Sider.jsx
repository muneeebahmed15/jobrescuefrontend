import React from 'react'
import logo from '../../assets/logo.png'
import { admin } from './menu'
import { Link } from 'react-router-dom'

const Sider = ({path}) => {
  
  return (
    <div className='d-flex flex-column align-items-center mt-3'>

      <img src={logo} alt="logo" width={100} />

    <div className='d-flex justify-content-center'>
      <ul className='mt-5' style={{paddingLeft: "0"}}>
        {admin.map((x, index)=>(
        <Link to={x.link} key={index} style={{textDecoration: 'none', color: "black"}}>
          <li className={x.margin} style={{listStyle: "none", color: path === x.link ? "blue" : ""}}>
            {x.title}
            </li>
            </Link>
      ))}
      </ul>
      </div>
      
    </div>
  )
}

export default Sider