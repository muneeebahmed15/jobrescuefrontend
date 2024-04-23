import {useEffect, useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { _AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


export const AddRecord = () =>{
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
            burroSource:  "",
            animalName:  "",
            // camperPhoto: "",
            animalGender:  "",
            animalAge: "",
            microchip:  "",
            freezeMark: "",
            ageNotes: "",
            animalYear: "",
            animalNotes: "",
        
            //care record
            vaccination:  "",
            nextVaccination:  "",
            vaccinationSerial: "",

            addRabies:"",
            nextRabies: "",
            rabiesSerial: "",
        
            farrier:  "",
            nextFarrie:  "",
            farrierName: "",
            otherFarrierName: "",
        
            deWorm:  "",
            nextDeWorm:  "",
            deWormBrand: "",
        
            sandClear: "" ,
            nextSandClear:  "",
            healthCertificate: "",
        
            coggins:  "",
        
            gelded:  "",

            careNotes: "",
        
            //training
        
            touch: "" ,
            touchPicture: "",
        
            brush:  "" ,
            brushPicture:"",

            halter: "",
            halterPicture: "",
        
            leadRope:  "" ,
            leadRopePicture: "",
        
            leadInSmall:   "",
            leadInSmallPicture: "",

            leadInLarge: "",
            leadInLargePicture: "",

            leadInPasture: "",
            leadInPasturePicture: "",
        
            tie:  "" ,
            tiePicture: "",
        
            touchFeet:  "" ,
            touchFeetPicture: "",

            pickupFeet: "",
            pickupFeetPicture: "",
        
            pickoutFeet:  "" ,
            pickoutFeetPicture: "",
        
            trailerLoad: "" ,
            tailerLoadPicture: "",

            trainingNotes: "",
        
            //adoptionInformation
            adoptionDate:  "" ,
            adopterName:  "" ,
            adopterEmail:  "" ,
            adopterPhone: "",
            adopterStreet: "",
            adopterCity:  "" ,
            aopterState:   "",
            adopterZip:   "",
            // adopterSource: [],
            
            brandInspection:  "" ,
            halterColor:  "" ,
            otherHalterColor: "",
            halterSize:  "" ,
            adopterNotes: ""
    })
    const router = useNavigate();

    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    // console.log(data);

    const addrecord = async() =>{
        setLoading(true);
        try {
            const res = await axios.post("add-animal", data);
            console.log(res);
            if(res.status === 200){
                toast.success("Camper Added");
                router("/admin/animal-records")
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return {addrecord, loading, data, handleChange}
}

export const AllAnimals = () =>{
    const {auth} = _AuthContext();
    const authToken = auth && auth.token; 

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const allAnimals = async()=>{
        setLoading(true);
        try {
            const res = await axios.get("get-animals")
            if(res.status === 200){
                setData(res.data.user);
            }
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    
    useEffect(() => {
        if(authToken){
        allAnimals();
    }
    }, [authToken]);

    return {data, loading}
}