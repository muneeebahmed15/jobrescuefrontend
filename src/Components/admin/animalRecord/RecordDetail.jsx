import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../../data';
import Layout from '../../layout';
import { Carousel, Button, Input } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const RecordDetail = () => {
    const { id } = useParams();
    const record = data.find(item => item.id === id);

    return (
        <>
            <Link to={'/admin/animal-records'} >
                <Button type='primary' className='mb-5' size='large' icon={<LeftOutlined />}>Back</Button>
            </Link>

            <h2 className='mb-5'>Animal Record</h2>
            <hr />

            {record && (
                <div className="row">
                    <div className="col-md-6">
                        <Carousel autoplay autoplaySpeed={2000}>
                            {record.img.map((image, index) => (
                                <div key={index}>
                                    <img src={image} className='rounded-3' alt={`Image ${index}`} style={{ width: '100%', height: '300px' }} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="col-md-6">
                        <div className="row mx-2">

                            <div className="col-md-6 mt-2">
                                <div style={{ paddingRight: '10px' }}>
                                    <label className='form-label'>Camper Name</label>
                                    <Input size="large" placeholder="large size" value={record.title} />
                                </div>
                            </div>

                            <div className="col-md-6 mt-2">
                                <div>
                                    <label className='form-label'>Mircochip Number</label>
                                    <Input size="large" placeholder="large size" value={record.microchip} />
                                </div>
                            </div>

                            <div className="col-md-6 mt-2">
                                <div style={{ paddingRight: '10px' }}>
                                    <label className='form-label'>Gender</label>
                                    <Input size="large" placeholder="large size" value={record.gender} />
                                </div>
                            </div>

                            <div className="col-md-6 mt-2">
                                <div style={{ paddingRight: '10px' }}>
                                    <label className='form-label'>Adopter Name</label>
                                    <Input size="large" placeholder="large size" value={record.adopterName} />
                                </div>
                            </div>

                            <div className="col-md-6 mt-2">
                                <div style={{ paddingRight: '10px' }}>
                                    <label className='form-label'>Arrived Date</label>
                                    <Input size="large" placeholder="large size" value={record.date} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RecordDetail;
