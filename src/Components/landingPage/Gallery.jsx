import React from 'react'
import {Carousel} from 'antd'
import picture1 from '../../assets/picture-1.jpeg'
import picture2 from '../../assets/picture-2.jpeg'
import picture3 from '../../assets/picture-3.jpeg'



const Gallery = () => {
  return (
    <div  className='pt-5 bg-color2 text-white'>
            <h1 style={{textAlign: "center", fontWeight: "800"}}>Gallery</h1>

            <Carousel autoplay slidesToShow={3} slidesToScroll={1} infinite className='mt-5'>
        <div className='d-flex'>
          <img src={picture1} alt="" style={{ width: '100%', height: 'auto' }} />
          <img src={picture2} alt="" style={{ width: '100%', height: 'auto' }} />
          <img src={picture3} alt="" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className='d-flex'>
          <img src={picture2} alt="" style={{ width: '100%', height: 'auto' }} />
          <img src={picture3} alt="" style={{ width: '100%', height: 'auto' }} />
          <img src={picture1} alt="" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className='d-flex'>
          <img src={picture3} alt="" style={{ width: '100%', height: 'auto' }} />
          <img src={picture1} alt="" style={{ width: '100%', height: 'auto' }} />
          <img src={picture2} alt="" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Carousel>
    </div>
  )
}

export default Gallery