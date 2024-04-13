import React from 'react'
import {Carousel} from 'antd'
import picture1 from '../../assets/picture-1.jpeg'
import picture2 from '../../assets/picture-2.jpeg'
import picture3 from '../../assets/picture-3.jpeg'

const Carousels = () => {
  return (
    <>
     <Carousel autoplay autoplaySpeed={2000}>
    <div>
    <img src={picture1} alt="Picture 1" style={{ width: '100%', height: "450px" }} />
    </div>
    <div>
    <img src={picture2} alt="Picture 1" style={{ width: '100%', height: "450px" }} />
    </div>
    <div>
    <img src={picture3} alt="Picture 1" style={{ width: '100%', height: "450px" }} />
    </div>
  </Carousel> 
    </>
  )
}

export default Carousels
