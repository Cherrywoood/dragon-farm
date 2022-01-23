import React, {useEffect, useState} from 'react';
import {Progress} from "react-sweet-progress";
import ButtonCust from "../../UI/button/ButtonCust";

const MyProgressBar = () => {
    const [health, setHealth] = useState('0');
    const [statusHealth, setStatusHealth] = useState('death');
    const [mood, setMood] = useState('0');
    const [statusMood, setStatusMood] = useState('bad');
    const [train, setTrain] = useState('0');
    const [statusTrain, setStatusTrain] = useState('bad');

    useEffect(()=> {
        if(Number(health) >= 80) setStatusHealth('good')
        if(Number(health) >= 40 && Number(health) < 80) setStatusHealth('normal')
        if(Number(health) > 0 && Number(health)<40) setStatusHealth('bad')
        if(Number(health) === 0) setStatusHealth('death')
        //если дракон умер, ничего нельзя сделать
    }, [health])
    useEffect(()=> {
        if(Number(mood) >= 80) setStatusMood('good')
        if(Number(mood) >= 40 && Number(mood) < 80) setStatusMood('normal')
        if(Number(mood) > 0 && Number(mood)<40) setStatusMood('bad')
    },[mood])
    useEffect(()=> {
        if(Number(train) >= 80) setStatusTrain('good')
        if(Number(train) >= 40 && Number(train) < 80) setStatusTrain('normal')
        if(Number(train) > 0 && Number(train)<40) setStatusTrain('bad')
    },[train])
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
        <div className="bar">
            Health : <Progress percent={health}
                      status={statusHealth}
                      theme={
                          {
                              good: {
                                  color: 'green'
                              },
                              normal: {
                                  color: 'yellow'
                              },
                              bad: {
                                  color: 'red'
                              },
                              death: {
                                  color: 'black'
                              }
                          }
                      }
            />
           Mood: <Progress percent={mood}
                      status={statusMood}
                      theme={
                          {
                              good: {
                                  color: 'green'
                              },
                              normal: {
                                  color: 'yellow'
                              },
                              bad: {
                                  color: 'red'
                              }
                          }
                      }
            />
            Train: <Progress percent={train}
                      status={statusTrain}
                      theme={
                          {
                              good: {
                                  color: 'green'
                              },
                              normal: {
                                  color: 'yellow'
                              },
                              bad: {
                                  color: 'red'
                              }
                          }
                      }
            />
            {/*   <ButtonCust onClick ={feedHandler}>Feed</ButtonCust>
            <ButtonCust onClick ={playHandler}>Play</ButtonCust>
            <ButtonCust onClick ={vetHandler}>Vet</ButtonCust>
            <ButtonCust onClick ={hitHandler}>Hit</ButtonCust>
            <ButtonCust onClick ={scoldHandler}>Scold</ButtonCust>*/}
        </div>
    );
};

export default MyProgressBar;