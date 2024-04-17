import React, { useState } from 'react';
import Layout from '../../layout';
import { Button, message, Steps, Form, Input, Card, Select } from 'antd';

const { Step } = Steps;

const CreateRecord = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    arrivalDate: "",
    sourceOfBurro: "",
    camperName: "",
    // comperPhoto: "",
    camperGender: "",
    camperAge: "",
    microchip: ""
  });


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const onFinish = () => {
    // Handle form submission logic here
    message.success('Form submitted successfully!');
  };

  const steps = [
    {
      title: 'Section 1',
      content: (
        <>
        <Card>
          <div className="row">

            <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Arrival Date</label>
            <Input size='large' type='date' placeholder='Arrival Date' value={formData.arrivalDate} name="arrivalDate"  onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Source of Burro</label> <br />
         <select className='form-select' name='sourceOfBurro' value={formData.sourceOfBurro} onChange={handleChange}>
          <option selected>Choose Source</option>
          <option value="BLM">BLM</option>
          <option value="Re Home">Re Home</option>
          <option value="Sale Barn">Sale Barn</option>
          <option value="Purchase">Purchase</option>
          <option value="Other">Other</option>
         </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Camper Name</label>
            <Input size='large' type='text' placeholder='Camper Name' name="camperName" value={formData.camperName} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Camper Photo</label>
            <Input size='large' type='name' placeholder='Camper Photo' name="camperPhoto" onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Camper Gender</label> <br />
          <select className='form-select' name='camperGender' value={formData.camperGender} onChange={handleChange}>
          <option selected>Choose Gender</option>
            <option value="Gelding">Gelding</option>
            <option value="Jack">Jack</option>
            <option value="Jenny">Jenny</option>
          </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Age</label>
            <Input size='large' type='number' placeholder="Age" name="camperAge" value={formData.camperAge} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Microchip #</label>
            <Input size='large' type='number' placeholder='Mircrochip Number' name="microchip" value={formData.microchip} onChange={handleChange} />
          </div>

          </div>

         {formData.sourceOfBurro === "BLM" &&
            <div className="row mt-3">
            <h3>IF BLM</h3>
            <div className="col-md-6 rightSpace mt-2">
        <label className='form-label'>Freeze Mark</label>
          <Input size='large' type='freezeMark' placeholder='Freeze Mark' name="freezeMark" value={formData.microchip} onChange={handleChange} />
        </div>

        <div className="col-md-6 rightSpace mt-2">
        <label className='form-label'>Herd Management Area</label>
          <Input size='large' type='text' placeholder='Freeze Mark' name="freezeMark" value={formData.microchip} onChange={handleChange} />
        </div>

        <div className="col-md-6 rightSpace mt-2">
        <label className='form-label'>Gather Date</label>
          <Input size='large' type='date' placeholder='Gather Date' name="gatherDate" value={formData.microchip} onChange={handleChange} />
        </div>
        </div>
          } 

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

             <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Vaccination Date</label>
            <Input size='large' type='date' placeholder='Vaccination Date' name="vaccination" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Next Vaccination</label>
            <Input size='large' type='date' placeholder='' name="nextVaccination" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Farrier</label>
            <Input size='large' type='date' placeholder='' name="farrier" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Farrier-Next Due</label>
            <Input size='large' type='date' placeholder='' name="farrierNext" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>De-Worm</label>
            <Input size='large' type='date' placeholder='' name="deWorm" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>De-Worm-Next Due</label>
            <Input size='large' type='date' placeholder='' name="deWormNext" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Sand Clear</label>
            <Input size='large' type='date' placeholder='' name="sandClear" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Sand Clear-Next Due</label>
            <Input size='large' type='date' placeholder='' name="sandClearNext" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Coggins</label>
            <Input size='large' type='date' placeholder='' name="conggins" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Gelded</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose Gelded</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Foal</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose Foal</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Pregnant">Pregnant</option>
            </select>
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
          <label className='form-label'>Touch/Carrots</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halten</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead Rope On</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Pen</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Tie</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Touch less/ Feet</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Pickup/out Less/feet</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Trailer Load</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
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
             <h3>Training Tasks</h3>

       
             <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Touch/Take Reward</label>
            <Input size='large' type='text' placeholder='Reward' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Brush/Groom</label>
            <Input size='large' type='text' placeholder='Brush/Groom' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter</label>
            <Input size='large' type='text' placeholder='Healer' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead Rope On</label>
            <Input size='large' type='text' placeholder='Lead Rope On' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Small Area</label>
            <Input size='large' type='text' placeholder='Lead in Small Area' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Tie to Post</label>
            <Input size='large' type='text' placeholder='Tie to Post' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Larger Area</label>
            <Input size='large' type='text' placeholder='Lead in Large Area' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Lead in Pasture/breezeway</label>
            <Input size='large' type='text' placeholder='Lead in Pasture/breezeway' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          </div>
          </Card>
        </>
      ),
    },
    {
      title: "Section 5",
      content: (
        <>
        <Card>

              <div className="row">
             <h3>Adoption Information</h3>

       
             <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Brand Inspection</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Sheduled</option>
              <option value="No">Completed</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter Color Requested</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Red</option>
              <option value="No">Orange</option>
              <option value="No">Green</option>
              <option value="No">Blue</option>
              <option value="No">Purple</option>
              <option value="No">Black with Tan</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Halter Size</label>
            <select className='form-select' name='gelded' value={formData.microchip}>
              <option selected>Choose option</option>
              <option value="Yes">Weanling</option>
              <option value="No">Yearling</option>
              <option value="No">Small</option>
            </select>
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adaption Date</label>
            <Input size='large' type='date' placeholder='Healer' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Name</label>
            <Input size='large' type='text' placeholder='Adopter Name' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Street Address</label>
            <Input size='large' type='text' placeholder='Adopter Street Address' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Tie to Post</label>
            <Input size='large' type='text' placeholder='Tie to Post' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Street</label>
            <Input size='large' type='text' placeholder='Adopter Street Address' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter City</label>
            <Input size='large' type='text' placeholder='Adopter City' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter State</label>
            <Input size='large' type='text' placeholder='Adopter State' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter ZIP</label>
            <Input size='large' type='text' placeholder='Adopter ZIP' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Email</label>
            <Input size='large' type='text' placeholder='Adopter Email' name="" value={formData.microchip} onChange={handleChange} />
          </div>

          <div className="col-md-6 rightSpace mt-2">
          <label className='form-label'>Adopter Phone</label>
            <Input size='large' type='text' placeholder='Adopter Phone' name="" value={formData.microchip} onChange={handleChange} />
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
            onFinish={onFinish}
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
                <Button type="primary" htmlType="submit">
                  Submit
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
