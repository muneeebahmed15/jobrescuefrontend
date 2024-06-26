import React, { useEffect, useState } from 'react'
import Layout from '../../layout'
import { Button, Card, Input, Avatar } from 'antd';
import {PlusOutlined, UserOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../../UI/BreadCrumbs';
import { GetUsers } from '../../../actions/authentication';


const Employees = () => {
  const path = useLocation().pathname;
  const {users, loading} = GetUsers();

  const [searchData, setSearchData] = useState([]);

useEffect(()=>{
  setSearchData(users)
}, [users])

  const handleSearchChange = (e) =>{
    const value = e.target.value;

    const newData = users?.filter((x)=>
  x.firstName.toLowerCase().includes(value.toLowerCase()) ||
  x.lastName.toLowerCase().includes(value.toLowerCase()) ||
  x.role.toLowerCase().includes(value.toLowerCase()) ||
  x.email.toLowerCase().includes(value.toLowerCase())
  )
  setSearchData(newData);
  }

  return (
    <>

      <BreadCrumbs path={path} />

    <div className='d-flex justify-content-between align-items-center mt-3'>
      <h2>All Staff</h2>
     <Link to={"/admin/employees/add"}> <Button type="primary" icon={<PlusOutlined />} size='large'>
            Add
          </Button> </Link>
    </div>
    <hr />

   <div>

    <div className='my-3' style={{maxWidth: "300px", minWidth: "180px"}}>
    <Input size="large" placeholder="Search..." onChange={handleSearchChange}/>
    </div>


    { loading ? "loading..." : searchData?.map((x) =>(
      <Card key={x._id}>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
        {x.photo ? <img src={`http://localhost:5000${x.photo}`} className='rounded-circle' style={{marginRight: "20px", width:"60px", height: "60px"}}/> : 
        <Avatar icon=<UserOutlined/> size={60}/>
        }
            <b>{`${x.firstName} ${x.lastName}`}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Email</label>
              <b>{x.email}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Phone</label>
              <b>{x.phone}</b>
            </div>
            
            <div className='d-flex flex-column'>
              <label className='text-secondary'>Role</label>
              <b>{x.role}</b>
            </div>

         <Link to={`/admin/employees/detail/${x._id}`}><Button>View Details</Button></Link>   
            
          </div> 
      </Card>
      ))}

      
{loading ? "" : (!users || users.length === 0) && <h3>No Staff Register</h3>}


    </div> 
    </>
  )
}

export default Employees
