import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../../data';
import Layout from '../../layout';
import { Carousel, Button, Input } from 'antd';
import { EditOutlined, LeftOutlined, UploadOutlined } from '@ant-design/icons';
import { SingleAnimal, UpdateAnimal } from '../../../actions/addAnimal';
import InputField from '../../../UI/InputField';
import { formatCreatedAtDate } from '../../../UI/DateFormater';

const RecordDetail = () => {
    const { id } = useParams();
    const {data, loading, singleanimal} = SingleAnimal(id);
    const {loading: updateLoading, updateAnimal, setUpdation, updation, from, setUpdatedData, updatedData, magic, changeHandler} = UpdateAnimal(id);

    const againMagic = () =>{
        setUpdation(false);
        updateAnimal();
    }

// console.log("from updatedData",from);

    useEffect(()=>{setUpdatedData(data)},[data])
   
    return (
        <>
            <Link to={'/admin/animal-records'} >
                <Button type='primary' className='mb-5' size='large' icon={<LeftOutlined />}>Back</Button>
            </Link>

                <div className='d-flex justify-content-between align-items-center'>
            <h2>Animal data</h2>
            
            <div>
           {!updation ? <Button size='large' className='me-2' icon={<EditOutlined/>} onClick={magic}>Edit</Button>
           : <Button size='large' type='primary' icon={<UploadOutlined/>} onClick={againMagic}>Update</Button>}
            </div>
            </div>

            <hr />

            {updatedData && (
                <div className="row">
                    {/* <div className="col-md-6">
                        <Carousel autoplay autoplaySpeed={2000}>
                            {data.img.map((image, index) => (
                                <div key={index}>
                                    <img src={image} className='rounded-3' alt={`Image ${index}`} style={{ width: '100%', height: '300px' }} />
                                </div>
                            ))}
                        </Carousel>
                    </div> */}

                    {/* <div className="col-md-6">
                        <div className="row mx-2">

                            <div className="col-md-6 mt-2">
                                <div style={{ paddingRight: '10px' }}>
                                    <label className='form-label'>Camper Name</label>
                                    <Input size="large" placeholder="large size" type ={} name={""} onChange={changeHandler} from={from} value={data.title} />
                                </div>
                            </div>

                            <div className="col-md-6 mt-2">
                                <div>
                                    <label className='form-label'>Mircochip Number</label>
                                    <Input size="large" placeholder="large size" type ={} name={""} onChange={changeHandler} from={from} value={data.microchip} />
                                </div>
                            </div>

                            <div className="col-md-6 mt-2">
                                <div style={{ paddingRight: '10px' }}>
                                    <label className='form-label'>Gender</label>
                                    <Input size="large" placeholder="large size" type ={} name={""} onChange={changeHandler} from={from} value={data.gender} />
                                </div>
                            </div>

                            <div className="col-md-6 mt-2">
                                <div style={{ paddingRight: '10px' }}>
                                    <label className='form-label'>Adopter Name</label>
                                    <Input size="large" placeholder="large size" type ={} name={""} onChange={changeHandler} from={from} value={data.adopterName} />
                                </div>
                            </div>

                            <div className="col-md-6 mt-2">
                                <div style={{ paddingRight: '10px' }}>
                                    <label className='form-label'>Arrived Date</label>
                                    <Input size="large" placeholder="large size" type ={} name={""} onChange={changeHandler} from={from} value={data.date} />
                                </div>
                            </div>

                        </div>
                    </div> */}
                    
                    <h4>Animal Information</h4>
                    <InputField label={"Source of Burro"} type ={"text"} name="burroSource" value={updatedData.burroSource } updation={updation} onChange={changeHandler} from={from}/>
                    {/* <InputField label={"Animal Name"} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Animal Name"} type ={"text"} name={"animalName"} value={ updatedData.animalName } updation={updation} onChange={changeHandler} from={from}/>
                    <InputField label={"Animal Gender"} type ={"text"} name={"animalGender"} updation={updation} onChange={changeHandler} from={from} value={updatedData.animalGender}/>
                    <InputField label={"Animal Age"} type ={"date"} name={"animalAge"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.animalAge)}/>
                    <InputField label={"Animal Year"} type ={"text"} name={"animalYear"} updation={updation} onChange={changeHandler} from={from} value={updatedData.animalYear}/>
                    <InputField label={"Age Notes"} type ={"text"} name={"ageNotes"} updation={updation} onChange={changeHandler} from={from} value={updatedData.ageNotes}/>
                    <InputField label={"Freeze Mark"} type ={"text"} name={"freezeMark"} updation={updation} onChange={changeHandler} from={from} value={updatedData.freezeMark}/>
                    <InputField label={"Microchip #"} type ={"text"} name={"microchip"} updation={updation} onChange={changeHandler} from={from} value={updatedData.microchip}/>
                    <InputField label={"Notes"} type ={"text"} name={"ageNotes"} updation={updation} onChange={changeHandler} from={from} value={updatedData.ageNotes}/>

                    <h4 className='mt-2'>Animal Care</h4>
                    <InputField label={"Vaccination"} type ={"date"} name={"vaccination"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.vaccination)}/>
                    <InputField label={"Next Vaccination"} type ={"date"} name={"nextVaccination"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.nextVaccination)}/>
                    <InputField label={"Vaccination Serial  #"} type ={"text"} name={"vaccinationSerial"} updation={updation} onChange={changeHandler} from={from} value={updatedData.vaccinationSerial}/>
                    <InputField label={"Rabies"} type ={"date"} name={"addRabies"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.addRabies)}/>
                    <InputField label={"Next Rabies"} type ={"date"} name={"nextRabies"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.nextRabies)}/>
                    <InputField label={"Rabies Serial #"} type ={"text"} name={"rabiesSerial"} updation={updation} onChange={changeHandler} from={from} value={updatedData.rabiesSerial}/>
                    <InputField label={"Farrier"} type ={"date"} name={"farrier"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.farrier)}/>
                    <InputField label={"Next Farrier"} type ={"date"} name={"nextFarrie"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.farrier)}/>
                    {updatedData.farrierName !== "Other" ?  <InputField label={"Farrier Name"} type ={"date"} name={"farrierName"} updation={updation} onChange={changeHandler} from={from} value={updatedData.farrierName}/>
                   :  <InputField label={"Farrier Name"} type ={"date"} name={"otherFarrierName"} updation={updation} onChange={changeHandler} from={from} value={updatedData.otherFarrierName}/>}
                    <InputField label={"De Worm"} type ={"date"} name={"deWorm"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.deWorm)}/>
                    <InputField label={"Next De Worm"} type ={"date"} name={"nextDeWorm"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.deWorm)}/>
                    <InputField label={"De Worm Brand"} type ={"date"} name={"deWormBrand"} updation={updation} onChange={changeHandler} from={from} value={updatedData.deWormBrand}/>
                    <InputField label={"Sand Clear"} type ={"date"} name={"sandClear"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.sandClear)}/>
                    <InputField label={"Next Sand Clear"} type ={"date"} name={"nextSandClear"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.nextSandClear)}/>
                    <InputField label={"Health Certificate"} type ={"text"} name={"healthCertificate"} updation={updation} onChange={changeHandler} from={from} value={updatedData.healthCertificate}/>
                    <InputField label={"Coggins"} type ={"text"} name={"coggins"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.coggins)}/>
                    <InputField label={"Gelded"} type ={"text"} name={"gelded"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.gelded)}/>
                    <InputField label={"Notes"} type ={"text"} name={"careNotes"} updation={updation} onChange={changeHandler} from={from} value={updatedData.careNotes}/>


                    <h4>Training Notes</h4>
                    <InputField label={"Tuch"} type ={"text"} name={"touch"} updation={updation} onChange={changeHandler} from={from} value={updatedData.touch}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Brush"} type ={"text"} name={"brush"} updation={updation} onChange={changeHandler} from={from} value={updatedData.brush}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Halter"} type ={"text"} name={"halter"} updation={updation} onChange={changeHandler} from={from} value={updatedData.halter}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Lead Rope"} type ={"text"} name={"leadRope"} updation={updation} onChange={changeHandler} from={from} value={updatedData.leadRope}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Lead In Small"} type ={"text"} name={"leadInSmall"} updation={updation} onChange={changeHandler} from={from} value={updatedData.leadInSmall}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Lead In Large"} type ={"text"} name={"leadInLarge"} updation={updation} onChange={changeHandler} from={from} value={updatedData.leadInLarge}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Lead In Pasture"} type ={"text"} name={"leadInPasture"} updation={updation} onChange={changeHandler} from={from} value={updatedData.leadInPasture}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Tie"} type ={"text"} name={"tie"} updation={updation} onChange={changeHandler} from={from} value={updatedData.tie}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Touch Feet"} type ={"text"} name={"touchFeet"} updation={updation} onChange={changeHandler} from={from} value={updatedData.touchFeet}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Pick Up Feet"} type ={"text"} name={"pickupFeet"} updation={updation} onChange={changeHandler} from={from} value={updatedData.pickupFeet}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Pick Out Feet"} type ={"text"} name={"pickoutFeet"} updation={updation} onChange={changeHandler} from={from} value={updatedData.pickoutFeet}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Tailer Load"} type ={"text"} name={"trailerLoad"} updation={updation} onChange={changeHandler} from={from} value={updatedData.trailerLoad}/>
                    {/* <InputField label={""} type ={} name={""} updation={updation} onChange={changeHandler} from={from} value={updatedData.}/> */}
                    <InputField label={"Notes"} type ={"text"} name={"trainingNotes"} updation={updation} onChange={changeHandler} from={from} value={updatedData.trainingNotes}/>


                    <h4>Adoption Information</h4>
                    <InputField label={"Adoption Date"} type ={"date"} name={"adoptionDate"} updation={updation} onChange={changeHandler} from={from} value={formatCreatedAtDate(updatedData.adoptionDate)}/>
                    <InputField label={"Adoption Name"} type ={"text"} name={"adopterName"} updation={updation} onChange={changeHandler} from={from} value={updatedData.adopterName}/>
                    <InputField label={"Adoption Email"} type ={"text"} name={"adopterEmail"} updation={updation} onChange={changeHandler} from={from} value={updatedData.adopterEmail}/>
                    <InputField label={"Adoption Phone"} type ={"number"} name={"adopterPhone"} updation={updation} onChange={changeHandler} from={from} value={updatedData.adopterPhone}/>
                    <InputField label={"Adoption Street"} type ={"text"} name={"adopterStreet"} updation={updation} onChange={changeHandler} from={from} value={updatedData.adopterStreet}/>
                    <InputField label={"Adoption City"} type ={"text"} name={"adopterCity"} updation={updation} onChange={changeHandler} from={from} value={updatedData.adopterCity}/>
                    <InputField label={"Adoption State"} type ={"text"} name={"aopterState"} updation={updation} onChange={changeHandler} from={from} value={updatedData.aopterState}/>
                    <InputField label={"Adoption Zip"} type ={"number"} name={"adopterZip"} updation={updation} onChange={changeHandler} from={from} value={updatedData.adopterZip}/>
                    <InputField label={"Adopter Source"} type ={"text"} name={"adopterSource"} updation={updation} onChange={changeHandler} from={from} value={updatedData.adopterSource}/>
                    <InputField label={"Brand Inspection"} type ={"text"} name={"brandInspection"} updation={updation} onChange={changeHandler} from={from} value={updatedData.brandInspection}/>
                 {updatedData.halterColor !== "Other" ? <InputField label={"Halter Color"} type ={"text"} name={"halterColor"} updation={updation} onChange={changeHandler} from={from} value={updatedData.halterColor}/>
                   : <InputField label={"Halter Color"} type ={"text"} name={"otherHalterColor"} updation={updation} onChange={changeHandler} from={from} value={updatedData.otherHalterColor}/>}
                    <InputField label={"Halter Size"} type ={"text"} name={"halterSize"} updation={updation} onChange={changeHandler} from={from} value={updatedData.halterSize}/>
                    <InputField label={"Notes"} type ={"text"} name={"adopterNotes"} updation={updation} onChange={changeHandler} from={from} value={updatedData.adopterNotes}/>
                </div>
            )}
        </>
    );
};

export default RecordDetail;
