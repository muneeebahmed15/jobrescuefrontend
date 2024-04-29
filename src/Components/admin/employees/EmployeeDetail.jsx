import React from 'react'
import { DeleteUser, SingleUser } from '../../../actions/authentication';
import { Link, useParams } from 'react-router-dom';
import InputField from '../../../UI/InputField';
import { Button, Card, Image } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { formatCreatedAtDate } from '../../../UI/DateFormater';

const EmployeeDetail = () => {
  const {id} = useParams();
  const {data, loading} = SingleUser(id);
  // const {loading: deleteLoading, deleteUser} = DeleteUser();


  return (
    <>

            <Link to={'/admin/employees'} >
                <Button type='primary' className='mb-3' size='large' icon={<LeftOutlined />}>Back</Button>
            </Link>

        <Card>
          {loading ? "loading..." : 
      <div className='row'>

      <div className='col-12 d-flex justify-content-end my-3'> {data.photo && <Image
                width={250}
                height={200}
               src={`http://localhost:5000/${data?.photo}`}
              />}
              </div>
              
            <InputField label={"Name"} value={`${data.firstName} ${data.lastName} `} readOnly from={"empDet"}/>
            
            {/* <InputField label={"Last Name"} value={data.lastName} readOnly from={"empDet"}/> */}

            <InputField label={"Email"} value={data.email} readOnly from={"empDet"}/>
            
            <InputField label={"Phone"} value={data.phone} readOnly from={"empDet"}/>
            
            <InputField label={"Address"} value={data.address} readOnly from={"empDet"}/>

            <InputField label={"Date of Birth"} value={formatCreatedAtDate(data.DOB)} readOnly from={"empDet"}/>
            
            <InputField label={"Emergency Contact Name"} value={data.emergencyContactName} readOnly from={"empDet"}/>
            
            <InputField label={"Emergency Contact Number"} value={data.emergencyContactNumber} readOnly from={"empDet"}/>
            
            {data.role === "Other" ? 
            <InputField label={"Role"} value={data.otherRole} readOnly from={"empDet"}/> :
            <InputField label={"Role"} value={data.role} readOnly from={"empDet"}/>}
            
            
            <InputField label={"Notes"} value={data.notes} readOnly from={"empDet"}/>
           
            {/* <div>
            <Button className='mt-2' style={{float: "right"}} size='large' type='primary' onClick={()=>deleteUser(data._id)}>
             {deleteLoading ? "loading..." : "Delete Staff"}
              </Button>
            </div> */}

            </div>
            }
        </Card>
        </>
  )
}

export default EmployeeDetail
