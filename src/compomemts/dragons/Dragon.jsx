import React, {useEffect, useState} from 'react';
import dragonImg from "../../img/image 12.png";
import DragonAction from "./DragonAction";
import '../../style/Dragon.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import ModalWindow from "../../UI/modal/ModalWindow";
const Dragon = () => {
    const [dragon, setDragon] = useState(null)
    const [dragonStatus, setDragonStatus] = useState(null)
    const [visible,setVisible] = useState(false)
    const [error, setError] = useState('')
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
                setDragonStatus(res.data.dragonStatus)
            }).catch((err) => {
            console.log(err.response)
        })
    }, [])
    return (
        <div className="dragon">
            <ModalWindow  visible={visible} setVisible={setVisible}>{error}</ModalWindow>
            <div className="dragon-content"><img src={dragonImg} alt="..."/></div>
            <div id="dragon__info" className="dragon-content">
                <span className='name'>{dragon && dragon.name}</span>
                <div className='status'>{dragon && dragonStatus}</div>
                {dragon && <DragonAction id={params.id} characters={dragon.dragonCharacteristics}
                                         status={dragonStatus} setDragonStatus={setDragonStatus}
                                         setError={setError} setVisible={setVisible}/>}
            </div>
        </div>
    );
};

export default Dragon;