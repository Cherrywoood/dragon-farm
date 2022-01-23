import React, {useState} from 'react';
import axios from "axios";
import '../style/Form.css'
import ButtonCust from "../UI/button/ButtonCust";

const OutingForm = ({active, setActive, info}) => {
    const [places, setPlaces] = useState(['Pillaging Pillars', 'Frozen Tundra', 'Rosy Shores'])
    const [focusPlace, setFocusPlace] = useState('')
    const getPlaces = () => {
        axios.get(`...`)
            .then(res => {
                setPlaces({places});
            })
    };
    const start = (e)=> {
        e.preventDefault();

        console.log(info, focusPlace)

        axios.post(` `, {info, focusPlace})
            .then(res => {
                console.log(res);
            }).catch((res)=>
            console.log(res))
        setActive(false)
    }
    return (
        <div className="outing-form" onClick={()=>setActive(false)}>
               <form className={active?"active":""}
                     onClick={(e)=>e.stopPropagation()}
                     onSubmit={start}
                >
                   <h2>Choose places</h2>
                   <label htmlFor="places">Place: </label>
                   <select id="places" onChange={(e)=>setFocusPlace(e.target.value)}>
                       {places.map((place,index) =>
                           <option key={index}>{place}</option>)
                       }
                   </select> <br/>
                   <ButtonCust>Start!</ButtonCust>
               </form>
        </div>
    );
};

export default OutingForm;