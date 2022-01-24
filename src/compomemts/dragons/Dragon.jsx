import React, {useEffect, useState} from 'react';
import dragonImg from "../../img/image 12.png";
import DragonCareTaker from "../caretaker/DragonCareTaker";
import '../../style/Dragon.css';
import {useParams} from "react-router-dom";
import axios from "axios";
const Dragon = () => {
    const [dragon, setDragon] = useState(null)
    const params = useParams()
    useEffect(() => {
        axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).get(`http://localhost:8080/dragon/${params.id}`)
            .then(res => {
                console.log(res.data)
                setDragon(res.data)
            }).catch((err) => {
            console.log(err.response)
        })
    }, [])
    return (
        <div className="dragon">

            <div className="dragon-content"><img src={dragonImg} alt="..."/></div>
            <div id="dragon__info" className="dragon-content">
                <span className='name'>{dragon && dragon.name}</span>
                <div className='status'>{dragon && dragon.dragonStatus}</div>
                {dragon && <DragonCareTaker id={params.id} characters={dragon.dragonCharacteristics} status={dragon.dragonStatus}/>}
            </div>
        </div>
    );
};

export default Dragon;