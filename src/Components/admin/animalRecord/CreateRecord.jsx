import React, { useState } from 'react';
import Layout from '../../layout';
import { Button, message, Steps, Form, Input, Card, Select } from 'antd';
import { AddRecord } from '../../../actions/addAnimal';
import InputField from '../../../UI/InputField';

const { Step } = Steps;

const CreateRecord = () => {
  const [current, setCurrent] = useState(0);
 

  const {addrecord, data, loading, handleChange} = AddRecord();


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  const steps = [
    {
      title: 'Section 1',
      content: (
        <>
        <Card>
          <div className="row">

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Source of Animal</label> <br />
         <select className='form-select' 
         name='burroSource' value={data.burroSource} onChange={handleChange}>
          <option selected>Choose Source</option>
          <option value="BLM">BLM</option>
          <option value="Re Home">Re Home</option>
          <option value="Sale Barn">Sale Barn</option>
          <option value="Purchase">Purchase</option>
          <option value="Other">Other</option>
         </select>
          </div>

          <InputField label={"Animal Name"} type={"text"} placeholder={"Animal Name"} name={"animalName"} value={data.animalName} onChange={handleChange} />
          
          <InputField label={"Animal Photo"} type={"file"} placeholder={"Camper Photo"} name={"camperphoto"} value={""} onChange={handleChange} />
          
          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Camper Gender</label> <br />
          <select className='form-select' name='camperGender'
           value={data.camperGender} onChange={handleChange}>

          <option selected>Choose Gender</option>
            <option value="Female">Female</option>
            <option value="Male-Intact">Male-Intact</option>
            <option value="Male-Gelded">Male-Gelded</option>
          </select>
          </div>

          <InputField label={"Age"} type={"number"} placeholder={"Age"} name={"camperAge"} value={data.camperAge} onChange={handleChange} />
          
          <InputField label={"Match Box"} type={"text"} placeholder={"Match"} name={"matchBox"} value={data.matchBox} onChange={handleChange} />
          
          <InputField label={"Microchip #"} type={"number"} placeholder={"Enter 15 digit code"} name={"microchip"} value={data.microchip} onChange={handleChange} />
          
          <InputField label={"Notes"} type={"text"} placeholder={"Notes"} name={"notes"} value={data.notes} onChange={handleChange} />

          </div>

         {/* {data.sourceOfBurro === "BLM" &&
            <div className="row mt-3">
            <h3>IF BLM</h3>
            <div className="col-md-6 rightSpace mt-2">
        <label className='form-label'>Freeze Mark</label>
          <Input size='large' type='freezeMark' placeholder='Freeze Mark' name="freezeMark" value={""} onChange={handleChange} />
        </div>

        <div className="col-md-6 rightSpace mt-2">
        <label className='form-label'>Herd Management Area</label>
          <Input size='large' type='text' placeholder='Freeze Mark' name="freezeMark" value={""} onChange={handleChange} />
        </div>

        <div className="col-md-6 rightSpace mt-2">
        <label className='form-label'>Gather Date</label>
          <Input size='large' type='date' placeholder='Gather Date' name="gatherDate" value={""} onChange={handleChange} />
        </div>
        </div>
          }  */}

          </Card>
        </>
      ),
    },
    {
      title: "Section 2",
      content: (
        <>
        <Card>

              <div className="row">
             <h3>Care Record</h3>

                       
          <InputField label={"Vaccination Date"} type={"date"} placeholder={"Vaccination Date"} name={"vaccination"} value={data.vaccination} onChange={handleChange} />
          
          <InputField label={"Next Vaccination Due"} type={"date"} placeholder={"Next Vaccination Due"} name={"nextVaccination"} value={data.nextVaccination} onChange={handleChange} />
          
          <InputField label={"Vaccination Serial #"} type={"date"} placeholder={"Vaccination Serial #"} name={"vaccinationSerial"} value={data.vaccinationSerial} onChange={handleChange} />
          
          <InputField label={"Add Rabies"} type={"date"} placeholder={"Add Rabies"} name={"addRabies"} value={data.addRabies} onChange={handleChange} />

          <InputField label={"Next Rabies Due"} type={"date"} placeholder={"Next Rabies Due"} name={"nextRabies"} value={data.nextRabies} onChange={handleChange} />
          
          <InputField label={"Vaccination Serial #"} type={"date"} placeholder={"Vaccination Serial #"} name={"nextRabies"} value={data.nextRabies} onChange={handleChange} />

          
          <InputField label={"Farrier"} type={"date"} placeholder={"Farrier"} name={"farrier"} value={data.farrier} onChange={handleChange} />
          
          <InputField label={"Next Due Farrier"} type={"date"} placeholder={"Next Due Farrier"} name={"nextFarrie"} value={data.nextFarrie} onChange={handleChange} />
          
          <div className="col-md-6 px-2 mt-2">
                <label className='form-label'>Farrier Name</label>
              <select className='form-select' name='farrierName' value={data.farrierName} onChange={handleChange} size='large' >
                <option defaultValue>Choose Farrier Name</option>
                <option value="Volunteer">Ross Keller</option>
                <option value="Board Member">Megan Legacy</option>
                <option value="Board Member">Adriane Temple</option>
                <option value="Board Member">Makendra Silverman</option>
                <option value="Other">Other</option>
              </select>
              </div>

              {data.farrierName === "Other" && 
              <InputField label={"Other Farrier Name"} placeholder={"Farrier Name"} type={"text"} name={"farrierName"} value={data.farrierName} onChange={changeHandler}/>
              }
          
          <InputField label={"De-Worm"} type={"date"} placeholder={"De-Worm"} name={"deWorm"} value={data.deWorm} onChange={handleChange} />
            
          <InputField label={"Next De-Worm Due"} type={"date"} placeholder={"Next De-Worm Due"} name={"nextDeWorm"} value={data.nextDeWorm} onChange={handleChange} />

          <InputField label={"Brand of Dewormer "} type={"text"} placeholder={"Brand of Dewormer "} name={"deWormBrand"} value={data.deWormBrand} onChange={handleChange} />
          
          <InputField label={"Sand Clear"} type={"date"} placeholder={"Sand Clear"} name={"sandClear"} value={data.sandClear} onChange={handleChange} />
    
          <InputField label={"Next Sand Clear Due"} type={"date"} placeholder={"Next Sand Clear Due"} name={"nextSandClear"} value={data.nextSandClear} onChange={handleChange} />

          
          <InputField label={"Health Certificate"} type={"date"} placeholder={"Health Certificate"} name={"healthCertificate"} value={data.healthCertificate} onChange={handleChange} />

          
          <InputField label={"Coggins"} type={"date"} placeholder={"Coggins"} name={"coggins"} value={data.coggins} onChange={handleChange} />
          
          <InputField label={"Gelded"} type={"date"} placeholder={""} name={"gelded"} value={data.gelded} onChange={handleChange} />

          <InputField label={"ADD Notes"} type={"text"} placeholder={"Add Notes"} name={"notes"} value={data.notes} onChange={handleChange} />

          {/* <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Gelded</label>
            <select className='form-select' name='gelded' value={data.gelded} onChange={handleChange} >
              <option selected>Choose Gelded</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
          </div> */}

          {/* <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Foal</label>
            <select className='form-select' name='foal' value={data.foal} onChange={handleChange} >
              <option selected>Choose Foal</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Pregnant">Pregnant</option>
            </select>
          </div> */}
          </div>
          </Card>
        </>
      ),
    },
    {
      title: "Section 3",
      content: (
        <>
        <Card>

              <div className="row">
             <h3>Training</h3>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Touch/Take Reward</label>
            <select className='form-select' name='touch' value={data.touch} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Touch/Take Reward Photo"} type={"file"} placeholder={""} name={"touchPicture"} value={data.touchPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Brush/Groom</label>
            <select className='form-select' name='touch' value={data.touch} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>

          <InputField label={"Brush/Groom Photo"} type={"file"} placeholder={""} name={"brushPicture"} value={data.brushPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter</label>
            <select className='form-select' name='halten' value={data.halten} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Halter Photo"} type={"file"} placeholder={""} name={"halter"} value={data.halter} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead Rope On</label>
            <select className='form-select' name='leadRope' value={data.leadRope} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Lead Rope On Photo"} type={"file"} placeholder={""} name={"leadRopeOn"} value={data.leadRopeOn} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Small Area</label>
            <select className='form-select' name='leadIn' value={data.leadIn} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Lead Small Area Photo"} type={"file"} placeholder={""} name={"leadSmallPicture"} value={data.leadSmallPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Large Area</label>
            <select className='form-select' name='leadIn' value={data.leadIn} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>

          <InputField label={"Lead Large Area Photo"} type={"file"} placeholder={""} name={"leadLargePicture"} value={data.leadLargePicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Pasture(outside pen)</label>
            <select className='form-select' name='leadIn' value={data.leadIn} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
         
          <InputField label={"Lead in Pasture(outside pen)"} type={"file"} placeholder={""} name={"leadPasture"} value={data.leadPasture} onChange={handleChange} />
       
          {/* <InputField label={"Lead Pasture Photo"} type={"file"} placeholder={""} name={"leadPasturePicture"} value={data.leadPasturePicture} onChange={handleChange} /> */}

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Tie</label>
            <select className='form-select' name='tie' value={data.tie} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Tie Photo"} type={"file"} placeholder={""} name={"tiePicture"} value={data.tiePicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Touch Feet</label>
            <select className='form-select' name='touchLess' value={data.touchLess} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Touch Feet Photo"} type={"file"} placeholder={""} name={"touchFeetPicture"} value={data.touchFeetPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Pick Up feet</label>
            <select className='form-select' name='pickupLess' value={data.pickupLess} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>

          <InputField label={"Pick Up feet Photo"} type={"file"} placeholder={""} name={"touchFeetPicture"} value={data.touchFeetPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Pick Out feet</label>
            <select className='form-select' name='pickupLess' value={data.pickupLess} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>

          <InputField label={"Pick Out Photo"} type={"file"} placeholder={""} name={"pickUpPicture"} value={data.pickUpPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Trailer Load</label>
            <select className='form-select' name='trailerLoad' value={data.trailerLoad} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Trailer Load Photo"} type={"file"} placeholder={""} name={"tailerLoadPicture"} value={data.tailerLoadPicture} onChange={handleChange} />
          
          <InputField label={"Add Notes"} type={"text"} placeholder={"Add Notes"} name={"notes"} value={data.notes} onChange={handleChange} />

          </div>
          </Card>
        </>
      ),
    },
    // {
    //   title: "Section 4",
    //   content: (
    //     <>
    //     <Card>

    //           <div className="row">
    //          <h3>Training Tasks</h3>

       
    //          <div className="col-md-6 rightSpace mt-2">
    //       <label className='form-label'>Touch/Take Reward</label>
    //         <Input size='large' type='text' placeholder='Reward' name="" value={""} onChange={handleChange} />
    //       </div>

    //       <div className="col-md-6 rightSpace mt-2">
    //       <label className='form-label'>Brush/Groom</label>
    //         <Input size='large' type='text' placeholder='Brush/Groom' name="" value={""} onChange={handleChange} />
    //       </div>

    //       <div className="col-md-6 rightSpace mt-2">
    //       <label className='form-label'>Halter</label>
    //         <Input size='large' type='text' placeholder='Healer' name="" value={""} onChange={handleChange} />
    //       </div>

    //       <div className="col-md-6 rightSpace mt-2">
    //       <label className='form-label'>Lead Rope On</label>
    //         <Input size='large' type='text' placeholder='Lead Rope On' name="" value={""} onChange={handleChange} />
    //       </div>

    //       <div className="col-md-6 rightSpace mt-2">
    //       <label className='form-label'>Lead in Small Area</label>
    //         <Input size='large' type='text' placeholder='Lead in Small Area' name="" value={""} onChange={handleChange} />
    //       </div>

    //       <div className="col-md-6 rightSpace mt-2">
    //       <label className='form-label'>Tie to Post</label>
    //         <Input size='large' type='text' placeholder='Tie to Post' name="" value={""} onChange={handleChange} />
    //       </div>

    //       <div className="col-md-6 rightSpace mt-2">
    //       <label className='form-label'>Lead in Larger Area</label>
    //         <Input size='large' type='text' placeholder='Lead in Large Area' name="" value={""} onChange={handleChange} />
    //       </div>

    //       <div className="col-md-6 rightSpace mt-2">
    //       <label className='form-label'>Lead in Pasture/breezeway</label>
    //         <Input size='large' type='text' placeholder='Lead in Pasture/breezeway' name="" value={""} onChange={handleChange} />
    //       </div>

    //       </div>
    //       </Card>
    //     </>
    //   ),
    // },
    {
      title: "Section 4",
      content: (
        <>
        <Card>

              <div className="row">
             <h3>Adoption Information</h3>

             <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adoption Date</label>
            <Input size='large' type='date' placeholder='Healer' name="adoptionDate" value={data.adoptionDate} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Name</label>
            <Input size='large' type='text' placeholder='Adopter Name' name="adopterName" value={data.adopterName} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Email</label>
            <Input size='large' type='text' placeholder='Adopter Email' name="adopterEmail" value={data.adopterEmail} onChange={handleChange} />
          </div>
        
          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Phone</label>
            <Input size='large' type='text' placeholder='Adopter Phone' name="adopterPhone" value={data.adopterPhone} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Street</label>
            <Input size='large' type='text' placeholder='Adopter Street Address' 
            name="adopterStreet" value={data.adopterStreet} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter City</label>
            <Input size='large' type='text' placeholder='Adopter City' name="adopterCity" value={data.adopterCity} onChange={handleChange} />
          </div>

           <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter State</label>
             <select className='form-select' name='adopterStreet' value={data.adopterStreet} onChange={handleChange} >
              <option selected>Choose option</option>
             <option value="Alabama">Alabama</option>
<option value="Alaska">Alaska</option>
<option value="Arizona">Arizona</option>
<option value="Arkansas">Arkansas</option>
<option value="California">California</option>
<option value="Colorado">Colorado</option>
<option value="Connecticut">Connecticut</option>
<option value="Delaware">Delaware</option>
<option value="Florida">Florida</option>
<option value="Georgia">Georgia</option>
<option value="Hawaii">Hawaii</option>
<option value="Idaho">Idaho</option>
<option value="Illinois">Illinois</option>
<option value="Indiana">Indiana</option>
<option value="Iowa">Iowa</option>
<option value="Kansas">Kansas</option>
<option value="Kentucky">Kentucky</option>
<option value="Louisiana">Louisiana</option>
<option value="Maine">Maine</option>
<option value="Maryland">Maryland</option>
<option value="Massachusetts">Massachusetts</option>
<option value="Michigan">Michigan</option>
<option value="Minnesota">Minnesota</option>
<option value="Mississippi">Mississippi</option>
<option value="Missouri">Missouri</option>
<option value="Montana">Montana</option>
<option value="Nebraska">Nebraska</option>
<option value="Nevada">Nevada</option>
<option value="New Hampshire">New Hampshire</option>
<option value="New Jersey">New Jersey</option>
<option value="New Mexico">New Mexico</option>
<option value="New York">New York</option>
<option value="North Carolina">North Carolina</option>
<option value="North Dakota">North Dakota</option>
<option value="Ohio">Ohio</option>
<option value="Oklahoma">Oklahoma</option>
<option value="Oregon">Oregon</option>
<option value="Pennsylvania">Pennsylvania</option>
<option value="Rhode Island">Rhode Island</option>
<option value="South Carolina">South Carolina</option>
<option value="South Dakota">South Dakota</option>
<option value="Tennessee">Tennessee</option>
<option value="Texas">Texas</option>
<option value="Utah">Utah</option>
<option value="Vermont">Vermont</option>
<option value="Virginia">Virginia</option>
<option value="Washington">Washington</option>
<option value="West Virginia">West Virginia</option>
<option value="Wisconsin">Wisconsin</option>
<option value="Wyoming">Wyoming</option>

            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter ZIP</label>
            <Input size='large' type='text' placeholder='Adopter ZIP' name="adopterZip" value={data.adopterZip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
  <label className='form-label'>Source of Adopter</label>
 
 <div className='d-flex justify-content-between'>
  <label className='form-label'>Select one from</label>
  <div>
    <input
      className="form-check-input"
      type="checkbox"
      id="facebook"
      name="facebook"
      checked={data.facebook}
      onChange={handleChange}
    />
    <label className='form-check-label' htmlFor="facebook">Facebook</label>
  </div>

  <div>
    <input
      className="form-check-input"
      type="checkbox"
      id="website"
      name="website"
      checked={data.website}
      onChange={handleChange}
    />
    <label className='form-check-label' htmlFor="website">Website</label>
  </div>
  </div>

  <div className='d-flex justify-content-between'>
  <div>
    <input
      className="form-check-input"
      type="checkbox"
      id="referral"
      name="referral"
      checked={data.referral}
      onChange={handleChange}
    />
    <label className='form-check-label' htmlFor="referral">Referral</label>
  </div>

  <div>
    <input
      className="form-check-input"
      type="checkbox"
      id="previousAdopter"
      name="previousAdopter"
      checked={data.previousAdopter}
      onChange={handleChange}
    />
    <label className='form-check-label' htmlFor="previousAdopter">Previous Adopter</label>
  </div>
  </div>

  <div className='d-flex justify-content-between'>
  <div>
    <input
      className="form-check-input"
      type="checkbox"
      id="other"
      name="other"
      checked={data.other}
      onChange={handleChange}
    />
    <label className='form-check-label' htmlFor="other">Other</label>
    {data.other && (
      <input
        className="form-control mt-2"
        type="text"
        id="sourceComment"
        name="sourceComment"
        value={data.sourceComment}
        onChange={handleChange}
        placeholder="Type Source"
      />
    )}
  </div>
  </div>
</div>

             <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Brand Inspection</label>
            <select className='form-select' name='brandInspection' value={data.brandInspection} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Sheduled</option>
              <option value="No">Completed</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter Color Requested</label>
            <select className='form-select' name='halterColor' value={data.halterColor} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Red</option>
              <option value="No">Orange</option>
              <option value="No">Green</option>
              <option value="No">Blue</option>
              <option value="No">Purple</option>
              <option value="No">Black with Tan</option>
              <option value="No">Other</option>
              <Input size='large' type='text' placeholder='Type Color' name="adopterZip" value={data.adopterZip}  />
           
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter Size</label>
            <select className='form-select' name='halterSize' value={data.halterSize} onChange={handleChange} >
              <option selected>Choose option</option>
              <option value="Yes">Weanling</option>
              <option value="No">Yearling</option>
              <option value="No">Small</option>
            </select>
          </div>

          <InputField label={"Add Notes"} type={"text"} placeholder={"Add Notes"} name={"notes"} value={data.notes} onChange={handleChange} />


          </div>
          </Card>
        </>
      ),
    },
  ];

  return (
    <>
      <div className='mx-4'>
        
        <Steps current={current}>
          {steps.map((step) => (
            <Step key={step.title} title={step.title} />
          ))}
        </Steps>

        <div style={{ marginTop: 24 }}>
          <Form
            name="animalForm"
            initialValues={{ remember: true }}
            onFinish={addrecord}
          >
            {steps[current].content}
            <div style={{ marginTop: 24 }}>
              {current > 0 && (
                <Button style={{ marginRight: 8 }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" htmlType="submit" >
                  {loading ? "loading..." : "Submit"}
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateRecord;
