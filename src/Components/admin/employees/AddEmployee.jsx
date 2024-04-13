import React from 'react'
import Layout from '../../layout'
import { Link } from 'react-router-dom'
import { Button, Card, Input } from 'antd'
import { LeftOutlined } from '@ant-design/icons'


const AddEmployee = () => {
  return (
    <Layout>
        
         <Link to={'/admin/employees'} >
                <Button type='primary' className='mb-5' size='large' icon={<LeftOutlined />}>Back</Button>
            </Link>

          <Card>
            <div className="row">

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Name</label>
              <Input placeholder="Name" type='text' size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Email</label>
              <Input placeholder="Email" type='email' size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Gender</label>
              <Input placeholder="Gender" type='text' size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Date of Birth</label>
              <Input placeholder="date" type='text' size='large' />
              </div>

            </div>

              <div>
            <Button className='mt-2' style={{float: "right"}} size='large' type='primary'>Add Employee</Button>
            </div>

          </Card>

    </Layout>
  )
}

export default AddEmployee