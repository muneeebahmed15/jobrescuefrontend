import {useEffect, useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'


export const AddRecord = () =>{
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
            // arrivalDate:  "",
            animalSource:  "",
            animalName:  "",
            // camperPhoto: { type: Date },
            camperGender:  "",
            camperAge: "",
            microchip:  "",
            freezemark: "",
        
        
            //care record
            vaccination:  "",
            nextVaccination:  "",
        
            farrier:  "",
            nextFarrie:  "",
        
            deWorm:  "",
            nextDeWorm:  "",
        
            sandClear: "" ,
            nextSandClear:  "",
        
            Coggins:  "",
        
            gelded:  "",
        
            foal:  "",
        
            //training
        
            touch: "" ,
        
            halten:  "" ,
        
            leadRope:  "" ,
        
            leadIn:   "",
        
            tie:  "" ,
        
            touchLess:  "" ,
        
            pickupLess:  "" ,
        
            trailerLoad: ""  ,
        
            //adoptionInformation
        
            brandInspection:  "" ,
            halterColor:  "" ,
            halterSize:  "" ,
            adoptionDate:  "" ,
            adopterName:  "" ,
            adopterAddress:  "" ,
            tieToPost:  "" ,
            adopterCity:  "" ,
            aopterState:   "",
            adopterZip:   "",
            adopterEmail:  "" ,
            adopterPhone: "" 
    })

    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const addrecord = async() =>{
        setLoading(true);
        try {
            const res = await axios.post("add-animal", data);
            if(res.status === 200){
                toast.success("Camper Added");
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return {addrecord, loading, data, handleChange}
}

// export const AllAnimals = () =>{
//     // const [data, setData] = useState([]);
//     // const [loading, setLoading] = useState(false);

//     // const allAnimals = async()=>{
//     //     setLoading(true);
//     //     try {
//     //         const res = await axios.get("get-animals")
//     //         if(res.status === 200){
//     //             setData(res.data);
//     //         }
//     //     } catch (error) {
//     //         console.log(error);
//     //     }finally{
//     //         setLoading(false);
//     //     }
//     // }
    
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         await allAnimals();
//     //     };
//     //     fetchData();
//     // }, []);

//     return {data, loading}
// }