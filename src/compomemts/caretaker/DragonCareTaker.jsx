import React, {useEffect, useState} from 'react';
import HealthBar from "../all/HealthBar";
import MoodBar from "../all/MoodBar";
import TrainBar from "../all/TrainBar";
import {Link, useParams} from "react-router-dom";
import {m} from "framer-motion";
import axios from "axios";

const DragonCareTaker = ({id, characters}) => {

    const [health, setHealth] = useState(characters[0].value);
    const [mood, setMood] = useState(characters[1].value);
    const [train, setTrain] = useState(characters[2].value);

    useEffect(() => {

    })
    const feedHandler = () => {

    }
    const playHandler = () => {


    }
    const treatHandler = () => {

    }
    const hitHandler = () => {
        axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).post("http://localhost:8080/dragon/action", {
            actionType: "hit",
            dragonId: id
        })
            .then(res => {
                console.log(res)
                setHealth(res.data.dragonCharacteristics[0].value)
                setMood(res.data.dragonCharacteristics[1].value)
                setTrain(res.data.dragonCharacteristics[2].value)
            }).catch((err) => {
            console.log(err.response)
        })
    }

    const scoldHandler = () => {

    }
    const trainHandler = () => {

    }
    return (
        <div className="dragon-work">

            <HealthBar health={health}/>
            <MoodBar mood={mood}/>
            <TrainBar train={train}/>

            {localStorage.getItem('wortType') === 'user' ?
                <div className="buttons">
                    <button className='button' onClick={feedHandler}>Feed</button>
                    <button className='button' onClick={playHandler}>Play</button>
                    <button className='button' onClick={treatHandler}>Treat</button>
                </div> : <div className="buttons">
                    <button className='button' onClick={hitHandler}>Hit</button>
                    <button className='button' onClick={scoldHandler}>Scold</button>
                    <button className='button' onClick={trainHandler}>Train</button>
                </div>
            }
        </div>
    );
};

export default DragonCareTaker;