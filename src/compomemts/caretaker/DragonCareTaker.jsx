import React, {useEffect, useState} from 'react';
import HealthBar from "../all/HealthBar";
import MoodBar from "../all/MoodBar";
import TrainBar from "../all/TrainBar";
import {Link, useParams} from "react-router-dom";
import {m} from "framer-motion";
import axios from "axios";

const DragonCareTaker = ({id, characters, status}) => {

    const [health, setHealth] = useState(characters.health);
    const [mood, setMood] = useState(characters.happiness);
    const [train, setTrain] = useState(characters.training);


    useEffect(() => {

    })
    function actionHandler(type){
        if (status !== 'alive') {
            alert("You can't " + type + " the dragon with status = " + status)
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
            }).catch((err) => {
                console.log(err.response)
            })
    }
    return (
        <div className="dragon-work">

            <HealthBar health={health}/>
            <MoodBar mood={mood}/>
            <TrainBar train={train}/>

            {localStorage.getItem('workerType') === 'caretaker' ?
                <div className="buttons">
                    <button className='button' onClick={() => actionHandler('feed')}>Feed</button>
                    <button className='button' onClick={() => actionHandler('play')}>Play</button>
                    <button className='button' onClick={() => actionHandler('treat')}>Treat</button>
                    <button className='button' onClick={() => actionHandler('hit')}>Hit</button>
                </div> : <div className="buttons">
                    <button className='button' onClick={() => actionHandler('hit')}>Hit</button>
                    <button className='button' onClick={() => actionHandler('scold')}>Scold</button>
                    <button className='button' onClick={() => actionHandler('train')}>Train</button>
                </div>
            }
        </div>
    );
};

export default DragonCareTaker;