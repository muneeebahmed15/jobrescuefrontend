import axios from 'axios';
import React, { useEffect, useState } from 'react';
import vite from "../../public/vite.svg"

// const Picture = () => {
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState('');
//   const [idss, setIdss] = useState();
//   const [imgs, setImg] = useState('');

//   const changeHandler = (e) => {
//     if (e.target.name === 'file') {
//       setFile(e.target.files[0]);
//     } else {
//       setName(e.target.value);
//     }
//   };

//   // console.log(file);

//   const submit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('name', name); // Include the name field in the FormData object

//       const res = await axios.post("/upload-file", formData);
//       console.log(res);
      
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getIds = async () =>{
//     try {
//       const ids = await axios.get("get-file");
//       setIdss(ids.data.ids);

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   // console.log(idss);

//   useEffect(()=>{
//     getIds()
//   },[])

//   const getFile = async(id) =>{
//     try {
//       const file = await axios.get(`get-file/${id}`)
//       // console.log(file.data.fileData.file);
//       setImg(file.data.fileData.file);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// console.log(imgs);

//   return (
//     <div>
//       <input type="text" className="form-control" name='name' value={name} onChange={changeHandler} />
//       <input className="form-control" type='file' name='file' onChange={changeHandler}/>
//       <button onClick={submit}>Upload</button>


//       {idss?.map((x)=> <h5 key={x._id} role='button' onClick={()=>getFile(x._id)}>{x.file}</h5>)}

//    {imgs.length > 0  ?  <img src={`http://localhost:5000/uploads`+imgs} alt="" />  :  
//       <h1>No image to show</h1>}

//     </div>
//   );
// };

const Picture = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [idss, setIdss] = useState();
  const [imgs, setImg] = useState('');

  const changeHandler = (e) => {
    if (e.target.name === 'file') {
      setFile(e.target.files[0]);
    } else {
      setName(e.target.value);
    }
  };

  // console.log(file);

  const submit = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name); // Include the name field in the FormData object

      const res = await axios.post("/upload-file", formData);
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  };

  const getIds = async () =>{
    try {
      const ids = await axios.get("get-file");
      setIdss(ids.data.ids);

    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(()=>{
    getIds()
  },[])

  const getFile = async(id) =>{
    try {
      const file = await axios.get(`get-file/${id}`);
      setImg(file.data.fileData.file);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(imgs);

  return (
    <div>
      <input type="text" className="form-control" name='name' value={name} onChange={changeHandler} />
      <input className="form-control" type='file' name='file' onChange={changeHandler}/>
      <button onClick={submit}>Upload</button>

      {idss?.map((x)=> <h5 key={x._id} role='button' onClick={()=>getFile(x._id)}>{x.file}</h5>)}

      {imgs.length > 0  ?  <img src={`http://localhost:5000${imgs}`} alt="" />  :  
      <h1>No image to show</h1>}

    </div>
  );
};

export default Picture;
