import React, { useEffect, useState } from 'react'
import Layout from '../../layout'
import { Button, Card, Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../../../UI/BreadCrumbs';
import axios from 'axios';
// import { data } from '../../data';
// import { AllAnimals } from '../../../actions/addAnimal';

const AnimalRecord = () => {
  const path = useLocation().pathname;

  // const {data, loading} = AllAnimals();

  // console.log(data.user);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const allAnimals = async()=>{
    setLoading(true);
    try {
        const res = await axios.get("get-animals")
        if(res.status === 200){
            console.log(res.data.user); // add this line
            setData(res.data.user);
        }
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false);
    }}
  
  useEffect(() => {
      const fetchData = async () => {
          await allAnimals();
      };
      fetchData();
  }, []);


  return (
    <>

      <BreadCrumbs path={path} />

    <div className='d-flex justify-content-between align-items-center mt-3'>
      <h2>Records</h2>
     <Link to={"/admin/animal-records/add"}> <Button type="primary" icon={<PlusOutlined />} size='large'>
            Add
          </Button> </Link>
    </div>
    <hr />

     {loading? "loading..." : data?.map((x, index) =>(
      <Card key={index}>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex flex-column'>
            <label className='text-secondary'>Animal Name</label>
             <b>{x.camperName}</b>
            </div>
            
            <div className='d-flex flex-column'>
              <label className='text-secondary'>Age</label>
              <b>{x.camperAge}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Gender</label>
              <b>{x.camperGender}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Adopter Name</label>
              <b>{x.adopterName}</b>
            </div>

            <div className='d-flex flex-column'>
              <label className='text-secondary'>Adoption Date</label>
              <b>{x.adoptionDate?.slice(0,10)}</b>
            </div>
            
          <Link to={`/admin/animal-records/detail/${x.id}`}> <Button>View Details</Button></Link>

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