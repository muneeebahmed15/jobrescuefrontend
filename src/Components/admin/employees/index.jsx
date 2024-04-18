import React, { useState } from 'react'
import Layout from '../../layout'
import { Button, Card, Input, Avatar } from 'antd';
import {PlusOutlined, UserOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../../UI/BreadCrumbs';
import { data } from '../../data';
import { GetUsers } from '../../../actions/authentication';



const AnimalRecord = () => {
  const path = useLocation().pathname;
  const [searchData, setSearchData] = useState(data);
  const {data} = GetUsers();

  console.log(data);

  const handleSearchChange = (e) =>{
    const value = e.target.value;
    console.log(value);
    const newData = data.filter((x)=>
  x.adopterName.toLowerCase().includes(value.toLowerCase()) ||
  x.title.toLowerCase().includes(value.toLowerCase()) ||
  x.microchip.toLowerCase().includes(value.toLowerCase()) ||
  x.gender.toLowerCase().includes(value.toLowerCase()) ||
  x.date.includes(value)
  )
  setSearchData(newData);

  }

  return (
    <>

      <BreadCrumbs path={path} />

    <div className='d-flex justify-content-between align-items-center mt-3'>
      <h2>All Employees</h2>
     <Link to={"/admin/employees/add"}> <Button type="primary" icon={<PlusOutlined />} size='large'>
            Add
          </Button> </Link>
    </div>
    <hr />

    <div>

    <div className='my-3' style={{maxWidth: "300px", minWidth: "180px"}}>
    <Input size="large" placeholder="Search..." onChange={handleSearchChange}/>
    </div>

      {searchData.map((x, index) =>(
      <Card key={index}>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
            <Avatar size={64} icon={<UserOutlined />} style={{marginRight: "20px"}}/>
            <b>{x.title}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Email</label>
              <b>{x.email}</b>
            </div>
            
            <div className='d-flex flex-column'>
              <label className='text-secondary'>Role</label>
              <b>{x.role}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Joining Date</label>
              <b>{x.date}</b>
            </div>


            <div className='d-flex flex-column'>
              <label className='text-secondary'>Gender</label>
              <b>{x.gender}</b>
            </div>
            
          <Button>View Details</Button>

          </div>
      </Card>
      ))}

    </div>
    </>
  )
}

export default AnimalRecord