import {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'


export const AddRecord = () =>{
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
            arrivalDate:  "",
            burroSource:  "",
            camperName:  "",
            // camperPhoto: { type: Date },
            camperGender:  "",
            camperAge: "",
            microchip:  "",
        
        
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