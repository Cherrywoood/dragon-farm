import React, {useState} from 'react';
import MyProgressBar from "../all/MyProgressBar";
import ButtonCust from "../../UI/button/ButtonCust";
import {Button} from "@chakra-ui/react";

const DragonCareTaker = () => {
    const [health, setHealth] = useState('0');
    const [statusHealth, setStatusHealth] = useState('death');
    const [mood, setMood] = useState('0');
    const [statusMood, setStatusMood] = useState('bad');
    const [train, setTrain] = useState('0');
    const [statusTrain, setStatusTrain] = useState('bad');

    const plusHealth = (value) => {
        if (Number(health)+5 >= 100) setHealth(100)
        else setHealth(String(Number(health)+5))
    }
    const minusHealth = (value) => {
        if (Number(health)-value <=0 ) setHealth(0)
        else setHealth(String(Number(health)-value))
    }
    const plusMood = (value) => {
        if (Number(mood)+value >= 100) setMood(100)
        else setMood(String(Number(mood)+value))
    }
    const minusMood = (value) => {
        if (Number(mood)-value <=0 ) setMood(0)
        else setMood(String(Number(mood)-value))
    }
    const plusTrain = (value) => {
        if (Number(train)+value >= 100) setTrain(100)
        else setTrain(String(Number(train)+value))
    }
    const minusTrain  = (value) => {
        if (Number(train)-value <=0 ) setTrain(0)
        else setTrain(String(Number(train)-value))
    }
    const feedHandler = () => {
        plusHealth(5)
        plusMood(2)
    }
    const playHandler = () => {
        plusMood(5)
        minusTrain(10)
    }
    const vetHandler = () => {
        plusHealth(10)
        plusMood(2)
    }
    const hitHandler = () => {
        minusHealth(10)
        minusMood(10)
        plusTrain(10)
    }

    const scoldHandler = () => {
        minusMood(5)
        plusTrain(5)
    }
    return (
        <div className="dragon-caretaker">
            <MyProgressBar/>
            <div className="buttons">
                <Button className='button' onClick ={feedHandler}>Feed</Button>
                <Button className='button' onClick ={playHandler}>Play</Button>
                <Button className='button' onClick ={vetHandler}>Vet</Button>
                <Button className='button' onClick ={hitHandler}>Hit</Button>
                <Button className='button' onClick ={scoldHandler}>Scold</Button>
            </div>
        </div>
    );
};

export default DragonCareTaker;