import React, { useEffect, useState } from 'react'
import { Button, Card, Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../../UI/BreadCrumbs';
import { formatCreatedAtDate } from '../../../UI/DateFormater';
import { AllAnimals } from '../../../actions/addAnimal';
import RecordDetail from './RecordDetail';

const AnimalRecord = () => {
  const path = useLocation().pathname;

  const {data, loading} = AllAnimals();
// console.log(data);

  const [searchData, setSearchData] = useState([]);

useEffect(()=>{
  setSearchData(data)
}, [data])

  const handleSearchChange = (e) =>{
    const value = e.target.value;


    const newData = data?.filter((x)=>
  x.camperName?.toLowerCase().includes(value.toLowerCase()) ||
  x.camperGender?.toLowerCase().includes(value.toLowerCase()) ||
  x.adopterName?.toLowerCase().includes(value.toLowerCase()) 
  )
  console.log(newData);

  setSearchData(newData);
  }


  return (
    <>

      <BreadCrumbs path={path} />

    <div className='d-flex justify-content-between align-items-center mt-3'>
      <h2>Animals Records</h2>
     <Link to={"/admin/animal-records/add"}> <Button type="primary" icon={<PlusOutlined />} size='large'>
            Add
          </Button> </Link>
    </div>
    <hr />

    <div className='my-3' style={{maxWidth: "300px", minWidth: "180px"}}>
    <Input size="large" placeholder="Search..." onChange={handleSearchChange}/>
    </div>

     {loading? "loading..." : searchData?.map((x, index) =>(
      <Card key={index}>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-column'>
            <label className='text-secondary'>Animal Name</label>
             <b>{x.animalName}</b>
            </div>
            
            <div className='d-flex flex-column'>
              <label className='text-secondary'>Age</label>
              <b>{formatCreatedAtDate(x.animalAge)}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Gender</label>
              <b>{x.animalGender}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Adopter Name</label>
              <b>{x.adopterName}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Adoption Date</label>
              <b>{x.adoptionDate && formatCreatedAtDate(x?.adoptionDate?.slice(0,10))}</b>
            </div>
            
          <Link to={`/admin/animal-records/detail/${x._id}`}> <Button>View Details</Button></Link>

          </div>
      </Card>
      ))}

    
    </>
  )
}

export default AnimalRecord


  // const [searchData, setSearchData] = useState(data);


  // const handleSearchChange = (e) =>{
  //   const value = e.target.value;
  //   console.log(value);
  //   const newData = data.filter((x)=>
  // x.adopterName.toLowerCase().includes(value.toLowerCase()) ||
  // x.title.toLowerCase().includes(value.toLowerCase()) ||
  // x.microchip.toLowerCase().includes(value.toLowerCase()) ||
  // x.gender.toLowerCase().includes(value.toLowerCase()) ||
  // x.date.includes(value)
  // )
  // setSearchData(newData);
  // }

  // console.log(searchData);


 {/* <div className='my-3' style={{maxWidth: "300px", minWidth: "180px"}}>
    <Input size="large" placeholder="Search..." onChange={handleSearchChange}/>
    </div> */}

    {/* {JSON.stringify(data)} */}

      {/* {loading? "loading..." : data?.map((x, index) =>(
      <Card key={index}>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
            <img src={x.img[0]} alt="" width={70} className='rounded-circle' style={{marginRight: "20px"}}/>
            <b>{x.title}</b>
            </div>
            
            <div className='d-flex flex-column'>
              <label className='text-secondary'>Adopter Name</label>
              <b>{x.adopterName}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Date Arrived</label>
              <b>{x.date}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Microchip#</label>
              <b>{x.microchip}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Gender</label>
              <b>{x.gender}</b>
            </div>
            
          <Link to={`/admin/animal-records/detail/${x.id}`}> <Button>View Details</Button></Link>

          </div>
      </Card>
      ))} */}

      {/* {loading ? "loading..." : data.map((x)=>(
        <p>{x.camperName}</p>
      ))} */}