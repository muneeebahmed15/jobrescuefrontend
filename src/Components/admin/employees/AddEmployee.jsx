import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Input, Checkbox } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { RegisterStaff } from '../../../actions/authentication'
import InputField from '../../../UI/InputField'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];

const {TextArea} = Input;

const AddEmployee = () => {
  const {data, loading, checkHandler, changeHandler, register} = RegisterStaff();

  return (
    <>
        
         <Link to={'/admin/employees'} >
                <Button type='primary' className='mb-3' size='large' icon={<LeftOutlined />}>Back</Button>
            </Link>

          <Card>
            <div className="row">

            <InputField label={"First Name"} placeholder={"First Name"} type={"text"} value={data.firstName} name={"firstName"} onChange={changeHandler}/>
             
            <InputField label={"Last Name"} placeholder={"Last Name"} type={"text"} name={"lastName"} value={data.lastName} onChange={changeHandler}/>

            <InputField label={"Email"} placeholder={"Email"} type={"email"} name={"email"} value={data.email} onChange={changeHandler}/> 

            <InputField label={"Phone"} placeholder={"Phone"} type={"number"} name={"phone"} value={data.phone} onChange={changeHandler}/> 
            
            <InputField label={"Address"} placeholder={"Address"} type={"text"} name={"address"} value={data.address} onChange={changeHandler}/> 
            
            <InputField label={"Date of Birth"} placeholder={""} type={"date"} name={"DOB"} value={data.DOB} onChange={changeHandler}/> 
            
            <InputField label={"Emergency Contact Name"} placeholder={"Emergency Contact Name"} type={"text"} name={"emergencyContactName"} value={data.emergencyContactName} onChange={changeHandler}/> 
            
            <InputField label={"Emergency Contact Number"} placeholder={"Emergency Contact Number"} type={"number"} name={"emergencyContactNumber"} value={data.emergencyContactNumber} onChange={changeHandler}/>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Role</label>
              <select className='form-select' name='role' value={data.role} onChange={changeHandler} size='large' >
                <option defaultValue>Choose Role</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Board Member">Board Member</option>
                <option value="Other">Other</option>
              </select>
              </div>

              {data.role === "Other" && 
              <InputField label={"Other Role"} placeholder={"Role"} type={"text"} name={"otherRole"} value={data.otherRole} onChange={changeHandler}/>
              }

              <div className="col-md-6 px-2 mt-2">
          <label className='form-label'>Availability</label>         
          <CheckboxGroup options={plainOptions}  defaultValue={data.availability} onChange={checkHandler} />
              </div>

            <InputField label={"Photo"} placeholder={""} type={"file"} name={"photo"} value={data.photo} onChange={changeHandler}/>
            
            <InputField label={"Password"} placeholder={"Password"} type={"password"} name={"password"} value={data.password} onChange={changeHandler}/>

              <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Notes</label>
                <TextArea
                name='notes'
                value={data.notes}
                onChange={changeHandler}
                placeholder="Add Notes Here..."
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