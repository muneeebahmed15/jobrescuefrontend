import React from 'react';
import rescue1 from '../../assets/resuce1.jpg';
import {Input, Button} from 'antd'

const { TextArea } = Input;

const Contact = () => {
  return (
    <div id='contact' className="container my-2">
      <div className="row border border-dark rounded-3">
        
        <div className="col-md-6">
                <h1 className='mt-3' style={{textAlign: "center"}}>Contact Us</h1>

            <div className="row mx-5">

            <div className="col-12">
              <div className="mb-3">
                <label className='form-label'>Full Name</label>
                <Input size='large' placeholder="Full Name" />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label className='form-label'>Email</label>
                <Input size='large' placeholder="Email" />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label className='form-label'>Phone Number</label>
                <Input size='large' placeholder="Phone Number" />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label className='form-label'>Are Interesting In Adopting A Burro?</label>
                <TextArea rows={4} placeholder="Are Interesting In Adopting A Burro?" />
              </div>

              <div className="col-12">
              <div className="mb-3">
                <label className='form-label'>Where Are You Based In?</label>
                <TextArea rows={4} placeholder="Where Are You Based In?" />
              </div>

            </div>

                </div>
       
                <Button className='my-3' size='large' type="primary">Submit</Button>
              
        </div>
        
        </div>

        <div className="col-md-6">
          <img src={rescue1} alt="" className='rounded-3' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
