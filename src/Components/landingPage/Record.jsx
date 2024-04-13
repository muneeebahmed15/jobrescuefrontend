import React from 'react'

const Record = () => {
  return (
    <div id='gallery' className='d-flex flex-column justify-content-center align-items-center bg-color text-white py-4'>
     <h1 className='heading'>THE WORLD'S LEADING DONKEY RESCUE ORGANIZATION</h1>

     <div className='container d-flex justify-content-between align-items-center mt-5'>

            <div className='d-flex flex-column justify-content-center align-items-center'>
               
                <h3><b>40</b></h3>
                
                <h5 className=' border-custom'>
                    Donkeys Rescued in 2024
                    </h5>

            </div>

            <div className='d-flex flex-column justify-content-center align-items-center'>
               
               <h3><b>40</b></h3>
               
               <h5 className=' border-custom'>
                Years In Operation
                </h5>

           </div>

           <div className='d-flex flex-column justify-content-center align-items-center'>
               
               <h3><b>40</b></h3>
               
               <h5 className=' border-custom'>
                Donkeys Under Our Direct Care
                </h5>

           </div>

           <div className='d-flex flex-column justify-content-center align-items-center'>
               
               <h3><b>40</b></h3>
               
               <h5 className=' border-custom'>
                Locations
                </h5>

           </div>


       
     </div>
    </div>
  )
}

export default Record
