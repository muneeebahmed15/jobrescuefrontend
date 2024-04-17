import React from 'react'
import Layout from '../../layout'
import { Link } from 'react-router-dom'
import { Button, Card, Input, message } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { RegisterStaff } from '../../../actions/authentication'
import { _AuthContext } from '../../../actions/AuthContext'


const AddEmployee = () => {
  const {data, loading, changeHandler, register} = RegisterStaff();
  const {auth} = _AuthContext();

  const user = auth.rest
  // console.log(user._id);

  data.role = "employee";
  data.addedBy = user._id;

  const submit = () =>{
    register()
    if(register){
      message.success("Employee Added");
    }else{
      message.error("Failed to add");
    }
  }

  return (
    <>
        
         <Link to={'/admin/employees'} >
                <Button type='primary' className='mb-5' size='large' icon={<LeftOutlined />}>Back</Button>
            </Link>

          <Card>
            <div className="row">

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Name</label>
              <Input placeholder="Name" type='text' name='name' value={data.name} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Gender</label>
              <select className='form-select' name='gender' value={data.gender} onChange={changeHandler} size='large' >
                <option selected>Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Email</label>
              <Input placeholder="Email" type='email' name='email' value={data.email} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Date of Birth</label>
              <Input placeholder="date" type='date' name='DOB' value={data.DOB} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Password</label>
              <Input placeholder="password" type='password' name='password' value={data.password} onChange={changeHandler} size='large' />
              </div>

            </div>

              <div>
            <Button className='mt-2' style={{float: "right"}} size='large' type='primary' onClick={submit}>
             {loading ? "loading..." : "Add Employee"}
              </Button>
            </div>

          </Card>

    </>
  )
}

export default AddEmployee