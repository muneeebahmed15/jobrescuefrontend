import React from 'react'
import { useLocation } from 'react-router-dom';
import {Card} from 'antd'
import Header from './Header'
import Sider from './Sider'

const Layout = ({children}) => {
  const path = useLocation().pathname;
 

  return (
    <div>
        <div className="row" style={{height: "100vh"}}>
            <div className="col-md-2 sider border-end">
                <Sider path={path}/>
            </div>

            <div className="col-12 col-md-10">
                <Header/>
                <Card className='m-2'>{children} </Card>
            </div>
        </div>
    </div>
  )
}

export default Layout