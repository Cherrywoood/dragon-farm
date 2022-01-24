import React, {useState} from 'react';
import MyProgressBar from "../all/MyProgressBar";
import ButtonCust from "../../UI/button/ButtonCust";

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
        <div>
            <MyProgressBar/>
            <ButtonCust onClick ={feedHandler}>Feed</ButtonCust>
            <ButtonCust onClick ={playHandler}>Play</ButtonCust>
            <ButtonCust onClick ={vetHandler}>Vet</ButtonCust>
            <ButtonCust onClick ={hitHandler}>Hit</ButtonCust>
            <ButtonCust onClick ={scoldHandler}>Scold</ButtonCust>
        </div>
    );
};

export default DragonCareTaker;