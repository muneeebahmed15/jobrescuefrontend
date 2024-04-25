import React, { useState } from 'react';
import Layout from '../../layout';
import { Button, message, Steps, Form, Input, Card, Select, Upload } from 'antd';
import { AddRecord } from '../../../actions/addAnimal';
import InputField from '../../../UI/InputField';
import { UploadOutlined } from '@ant-design/icons';

const { Step } = Steps;

const CreateRecord = () => {
  const currentYear = new Date().getFullYear;
  console.log(currentYear);
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
          <option defaultValue>Choose Source</option>
          <option value="BLM">BLM</option>
          <option value="Re Home">Re Home</option>
          <option value="Sale Barn">Sale Barn</option>
          <option value="Purchase">Purchase</option>
          <option value="Other">Other</option>
         </select>
          </div>

          <InputField label={"Animal Name"} type={"text"} placeholder={"Animal Name"} name={"animalName"} value={data.animalName} onChange={handleChange} />
          
          <div className="col-md-6 rightSpace mt-2">
        <label className='form-label'>Animal Photo</label>
          <Input size='large' type='file' placeholder='' name="animalPhoto" value={data.animalPhoto} onChange={handleChange} />
        </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Animal Gender</label> <br />
          <select className='form-select' name='animalGender'
           value={data.animalGender} onChange={handleChange}>

          <option defaultValue>Choose Gender</option>
            <option value="Female">Female</option>
            <option value="Male-Intact">Male-Intact</option>
            <option value="Male-Gelded">Male-Gelded</option>
          </select>
          </div>

          <InputField label={"Animal Age"} type={"date"} placeholder={"Animal Age"} name={"animalAge"} value={data.camperAge} onChange={handleChange} />

          <InputField label={"Animal Birth Year"} type={"number"} placeholder={"Animal Birth Year"} name={"animalYear"} value={data.animalYear} onChange={handleChange} />
          
          <InputField label={"Age Notes"} type={"text"} placeholder={"Age Notes"} name={"ageNotes"} value={data.ageNotes} onChange={handleChange} />
          
          <InputField label={"Freeze Mark"} type={"text"} placeholder={"Freeze Mark"} name={"freezeMark"} value={data.freezeMark} onChange={handleChange} />
          
          <InputField label={"Microchip #"} type={"number"} placeholder={"Enter 15 digit code"} name={"microchip"} value={data.microchip} onChange={handleChange} />
          
         
            <div className="col-12 mt-3">
        <label className='form-label'>Notes</label>
          <Input size='large' type='text' placeholder='Notes' name="animalNotes" value={data.animalNotes} onChange={handleChange} />
        </div>
          </div>

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

          {/* vaccination */}
          <InputField label={"Vaccination Date"} type={"date"} placeholder={"Vaccination Date"} name={"vaccination"} value={data.vaccination} onChange={handleChange} from={"col-3"}/>
          
          <InputField label={"Next Vaccination Due"} type={"date"} placeholder={"Next Vaccination Due"} name={"nextVaccination"} value={data.nextVaccination} onChange={handleChange} from={"col-3"}/>
          
          <InputField label={"Vaccination Serial #"} type={"text"} placeholder={"Vaccination Serial #"} name={"vaccinationSerial"} value={data.vaccinationSerial} onChange={handleChange} from={"col-3"}/>
          
          {/* rabies */}
          <InputField label={"Rabies"} type={"date"} placeholder={"Add Rabies"} name={"addRabies"} value={data.addRabies} onChange={handleChange} from={"col-3"}/>

          <InputField label={"Next Rabies Due"} type={"date"} placeholder={"Next Rabies Due"} name={"nextRabies"} value={data.nextRabies} onChange={handleChange} from={"col-3"}/>
          
          <InputField label={"Rabies Serial #"} type={"text"} placeholder={"Vaccination Serial #"} name={"rabiesSerial"} value={data.rabiesSerial} onChange={handleChange} from={"col-3"}/>

          {/* farrier */}
          <InputField label={"Farrier"} type={"date"} placeholder={"Farrier"} name={"farrier"} value={data.farrier} onChange={handleChange} from={"col-3"}/>
          
          <InputField label={"Next Due Farrier"} type={"date"} placeholder={"Next Due Farrier"} name={"nextFarrie"} value={data.nextFarrie} onChange={handleChange} from={"col-3"}/>
          
          <div className="col-md-4 px-2 mt-2">
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
              <InputField label={"Other Farrier Name"} placeholder={"Farrier Name"} type={"text"} name={"otherFarrierName"} value={data.otherFarrierName} onChange={handleChange} from={"col-3"}/>
              }
          
          {/* de-worm */}
          <InputField label={"De-Worm"} type={"date"} placeholder={"De-Worm"} name={"deWorm"} value={data.deWorm} onChange={handleChange} from={"col-3"}/>
            
          <InputField label={"Next De-Worm Due"} type={"date"} placeholder={"Next De-Worm Due"} name={"nextDeWorm"} value={data.nextDeWorm} onChange={handleChange} from={"col-3"}/>

          <InputField label={"Brand of Dewormer "} type={"text"} placeholder={"Brand of Dewormer "} name={"deWormBrand"} value={data.deWormBrand} onChange={handleChange} from={"col-3"}/>
          
          {/* sand clear */}
          <InputField label={"Sand Clear"} type={"date"} placeholder={"Sand Clear"} name={"sandClear"} value={data.sandClear} onChange={handleChange} from={"col-3"}/>
    
          <InputField label={"Next Sand Clear Due"} type={"date"} placeholder={"Next Sand Clear Due"} name={"nextSandClear"} value={data.nextSandClear} onChange={handleChange} from={"col-3"}/>
          
          <InputField label={"Health Certificate"} type={"date"} placeholder={"Health Certificate"} name={"healthCertificate"} value={data.healthCertificate} onChange={handleChange} from={"col-3"}/>

          <InputField label={"Coggins"} type={"date"} placeholder={"Coggins"} name={"coggins"} value={data.coggins} onChange={handleChange} />
          
          <InputField label={"Gelded"} type={"date"} placeholder={""} name={"gelded"} value={data.gelded} onChange={handleChange} />

          <div className="col-12 mt-3">
        <label className='form-label'>Notes</label>
          <Input size='large' type='text' placeholder='Notes' name="careNotes" value={data.careNotes} onChange={handleChange} />
        </div>

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
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Touch/Take Reward Photo"} type={"file"} placeholder={""} name={"touchPicture"} value={data.touchPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Brush/Groom</label>
            <select className='form-select' name='brush' value={data.brush} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>

          <InputField label={"Brush/Groom Photo"} type={"file"} placeholder={""} name={"brushPicture"} value={data.brushPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter</label>
            <select className='form-select' name='halter' value={data.halter} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Halter Photo"} type={"file"} placeholder={""} name={"halterPicture"} value={data.halterPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead Rope On</label>
            <select className='form-select' name='leadRope' value={data.leadRope} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Lead Rope On Photo"} type={"file"} placeholder={""} name={"leadRopePicture"} value={data.leadRopePicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Small Area</label>
            <select className='form-select' name='leadInSmall' value={data.leadInSmall} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Lead Small Area Photo"} type={"file"} placeholder={""} name={"leadInSmallPicture"} value={data.leadInSmallPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Large Area</label>
            <select className='form-select' name='leadInLarge' value={data.leadInLarge} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>

          <InputField label={"Lead Large Area Photo"} type={"file"} placeholder={""} name={"leadInLargePicture"} value={data.leadInLargePicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Pasture(outside pen)</label>
            <select className='form-select' name='leadInPasture' value={data.leadInPasture} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
         
          <InputField label={"Lead in Pasture(outside pen)"} type={"file"} placeholder={""} name={"leadInPasturePicture"} value={data.leadInPasturePicture} onChange={handleChange} />
       
          {/* <InputField label={"Lead Pasture Photo"} type={"file"} placeholder={""} name={"leadPasturePicture"} value={data.leadPasturePicture} onChange={handleChange} /> */}

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Tie</label>
            <select className='form-select' name='tie' value={data.tie} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Tie Photo"} type={"file"} placeholder={""} name={"tiePicture"} value={data.tiePicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Touch Feet</label>
            <select className='form-select' name='touchFeet' value={data.touchFeet} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Touch Feet Photo"} type={"file"} placeholder={""} name={"touchFeetPicture"} value={data.touchFeetPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Pick Up feet</label>
            <select className='form-select' name='pickupFeet' value={data.pickupFeet} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>

          <InputField label={"Pick Up feet Photo"} type={"file"} placeholder={""} name={"pickupFeetPicture"} value={data.pickupFeetPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Pick Out feet</label>
            <select className='form-select' name='pickoutFeet' value={data.pickoutFeet} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>

          <InputField label={"Pick Out Photo"} type={"file"} placeholder={""} name={"pickoutFeetPicture"} value={data.pickUpPicture} onChange={handleChange} />

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Trailer Load</label>
            <select className='form-select' name='trailerLoad' value={data.trailerLoad} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Working">Working</option>
            </select>
          </div>
          
          <InputField label={"Trailer Load Photo"} type={"file"} placeholder={""} name={"tailerLoadPicture"} value={data.tailerLoadPicture} onChange={handleChange} />
          
          <div className="col-12 rightSpace mt-2">
        <label className='form-label'>Notes</label>
          <Input size='large' type='text' placeholder='Notes' name="trainingNotes" value={data.trainingNotes} onChange={handleChange} />
        </div>

          </div>
          </Card>
        </>
      ),
    },
    {
      title: "Section 4",
      content: (
        <>
        <Card>

              <div className="row">
             <h3>Adoption Information</h3>

             <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adoption Date</label>
            <Input size='large' type='date' placeholder='' name="adoptionDate" value={data.adoptionDate} onChange={handleChange} />
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
             <select className='form-select' name='aopterState' value={data.aopterState} onChange={handleChange} >
              <option defaultValue>Choose option</option>
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
          <select className='form-select' name='adopterSource' value={data.adopterSource}>
          <option defaultValue>Choose Source of Adopter</option>
          <option value="Referral">Referral</option>
          <option value="Facebook">Facebook</option>
          <option value="Website">Website</option>
          <option value="Previous Adopter">Previous Adopter</option>
          <option value="Other">Other</option>
          </select>
          </div>

 
 {data.adopterSource === "Other" && (
  
  <div className="col-md-6 rightSpace mt-2">
      <input
        className="form-control mt-2"
        type="text"
        id="sourceComment"
        name="sourceComment"
        value={data.sourceComment}
        onChange={handleChange}
        placeholder="Type Source"
      />
      </div>
    )}


             <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Brand Inspection</label>
            <select className='form-select' name='brandInspection' value={data.brandInspection} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Yes">Sheduled</option>
              <option value="No">Completed</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter Color Requested</label>
            <select className='form-select' name='halterColor' value={data.halterColor} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Red">Red</option>
              <option value="Orange">Orange</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Purple">Purple</option>
              <option value="Black with Tan">Black with Tan</option>
              <option value="Other">Other</option>
              </select>
          </div>

          {data.halterColor === "Other" &&           
          <InputField label={"Add Color"} type={"text"} placeholder={"Add Color"} name={"otherHalterColor"} value={data.otherHalterColor} onChange={handleChange} />
}

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter Size</label>
            <select className='form-select' name='halterSize' value={data.halterSize} onChange={handleChange} >
              <option defaultValue>Choose option</option>
              <option value="Weanling">Weanling</option>
              <option value="Yearling">Yearling</option>
              <option value="Small">Small</option>
            </select>
          </div>

          <div className="col-12 rightSpace mt-2">
          <label className='form-label'>Notes</label>
            <Input size='large' type='text' placeholder='Notes' name="adopterNotes" value={data.adopterNotes} onChange={handleChange} />
          </div>

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
