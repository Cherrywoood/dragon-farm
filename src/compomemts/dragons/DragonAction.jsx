import React, {useEffect, useState} from 'react';
import HealthBar from "../all/HealthBar";
import MoodBar from "../all/MoodBar";
import TrainBar from "../all/TrainBar";
import {Link, useParams} from "react-router-dom";
import {m} from "framer-motion";
import axios from "axios";

const DragonAction = ({id, characters, status, setDragonStatus, setError, setVisible}) => {

    const [health, setHealth] = useState(characters.health);
    const [mood, setMood] = useState(characters.happiness);
    const [train, setTrain] = useState(characters.training);


    useEffect(() => {

    })
    function actionHandler(type){
        if (status !== 'alive') {
           setError("You can't " + type + " the dragon with status = " + status)
            setVisible(true)
        } else axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).post("http://localhost:8080/dragon/action", {
            actionType: type,
            dragonId: id
        })
            .then(res => {
                console.log(res)
                setHealth(res.data.dragonCharacteristics.health)
                setMood(res.data.dragonCharacteristics.happiness)
                setTrain(res.data.dragonCharacteristics.training)
                setDragonStatus(res.data.dragonStatus)
            }).catch((err) => {
                console.log(err.response)
            })
    }
    return (
        <div className="dragon-work">

            <HealthBar health={health}/>
            <MoodBar mood={mood}/>
            <TrainBar train={train}/>

            {localStorage.getItem('role') === 'worker' ?
                localStorage.getItem('workerType') === 'caretaker'?
                <div className="buttons">
                    <button className='button' onClick={() => actionHandler('feed')}>Feed</button>
                    <button className='button' onClick={() => actionHandler('play')}>Play</button>
                    <button className='button' onClick={() => actionHandler('treat')}>Treat</button>
                    <button className='button' onClick={() => actionHandler('hit')}>Hit</button>
                </div> : <div className="buttons">
                    <button className='button' onClick={() => actionHandler('hit')}>Hit</button>
                    <button className='button' onClick={() => actionHandler('scold')}>Scold</button>
                    <button className='button' onClick={() => actionHandler('train')}>Train</button>
                </div> :
                <div className="buttons">
                    <button className='button' onClick={() => actionHandler('feed')}>Feed</button>
                    <button className='button' onClick={() => actionHandler('play')}>Play</button>
                    <button className='button' onClick={() => actionHandler('treat')}>Treat</button>
                    <button className='button' onClick={() => actionHandler('hit')}>Hit</button>
                    <button className='button' onClick={() => actionHandler('scold')}>Scold</button>
                    <button className='button' onClick={() => actionHandler('train')}>Train</button>
                </div>

            }
        </div>
    );
};

export default DragonAction;