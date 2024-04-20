import React from 'react'
import Layout from '../../layout'
import { Link } from 'react-router-dom'
import { Button, Card, Input } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { RegisterStaff } from '../../../actions/authentication'

const {TextArea} = Input;

const AddEmployee = () => {
  const {data, loading, changeHandler, register} = RegisterStaff();

  // console.log(data);

  data.role = "employee";

  return (
    <>
        
         <Link to={'/admin/employees'} >
                <Button type='primary' className='mb-5' size='large' icon={<LeftOutlined />}>Back</Button>
            </Link>

          <Card>
            <div className="row">

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>First Name</label>
              <Input placeholder="Name" type='text' name='firstName' value={data.firstName} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Last Name</label>
              <Input placeholder="Name" type='text' name='lastName' value={data.lastName} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Email</label>
              <Input placeholder="Email" type='email' name='email' value={data.email} onChange={changeHandler} size='large' />
              </div>

              

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Phone</label>
              <Input placeholder="Email" type='number' name='phone' value={data.phone} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Address</label>
              <Input placeholder="Email" type='text' name='address' value={data.address} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Date of Birth</label>
              <Input placeholder="date" type='date' name='DOB' value={data.DOB} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Emergency Contact Name</label>
              <Input placeholder="Emergency Contact Name" type='text' name='emergencyContactName' value={data.emergencyContactName} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Emergency Contact Number</label>
              <Input placeholder="Emergency Contact Number" type='text' name='emergencyContactNumber' value={data.emergencyContactNumber} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Role</label>
              <select className='form-select' name='role' value={data.role} onChange={changeHandler} size='large' >
                <option defaultValue>Choose Role</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Board Member">Board Member</option>
                <option value="Other">Other</option>
                <Input placeholder="Role" type='text' name='emergencyContactNumber' value={data.emergencyContactNumber} onChange={changeHandler} size='large' />
              </select>
              </div>

              <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Availability</label>
          <div>
            <Input size='large' type='checkbox' placeholder='Adopter ZIP' name="adopterZip" value={data.adopterZip} onChange={handleChange} />
            <label className='form-label'>Sunday</label>
            </div>

            <div>
            <Input size='large' type='checkbox' placeholder='Adopter ZIP' name="adopterZip" value={data.adopterZip} onChange={handleChange} />
            <label className='form-label'>Monday</label>
            </div>

            <div>
            <Input size='large' type='checkbox' placeholder='Adopter ZIP' name="adopterZip" value={data.adopterZip} onChange={handleChange} />
            <label className='form-label'>Tuesday</label>
            </div>

            <div>
            <Input size='large' type='checkbox' placeholder='Adopter ZIP' name="adopterZip" value={data.adopterZip} onChange={handleChange} />
            <label className='form-label'>Wednesday</label>
            </div>

            <div>
            <Input size='large' type='checkbox' placeholder='Adopter ZIP' name="adopterZip" value={data.adopterZip}  />
            <label className='form-label'>Thursday</label>
            </div>

            <div>
            <Input size='large' type='checkbox' placeholder='Adopter ZIP' name="adopterZip" value={data.adopterZip}  />
            <label className='form-label'>Friday</label>
            </div>

            <div>
            <Input size='large' type='checkbox' placeholder='Adopter ZIP' name="adopterZip" value={data.adopterZip}  />
            <label className='form-label'>Saturday</label>
            </div>

            <div>
            <Input size='large' type='text' placeholder='Type Source' name="adopterZip" value={data.adopterZip}  />
            
            </div>

          </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Photo</label>
              <Input placeholder="photo" type='file' name='photo' value={data.photo} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Password</label>
              <Input placeholder="password" type='password' name='password' value={data.password} onChange={changeHandler} size='large' />
              </div>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Notes</label>
                <TextArea
                 placeholder="Autosize height with minimum and maximum number of lines"
                autoSize={{
                minRows: 2,
                  maxRows: 6, }}/>
              </div>

            </div>

              <div>
            <Button className='mt-2' style={{float: "right"}} size='large' type='primary' onClick={register}>
             {loading ? "loading..." : "Add Employee"}
              </Button>
            </div>

          </Card>

    </>
  )
}

export default AddEmployee