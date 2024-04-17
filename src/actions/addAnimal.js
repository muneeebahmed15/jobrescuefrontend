import {useState} from 'react'
import axios from 'axios'

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

console.log(data);

    const addrecord = async() =>{
        setLoading(true);
        try {
            const res = await axios.post("add-animal", data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return {addrecord, loading, data, handleChange}
}