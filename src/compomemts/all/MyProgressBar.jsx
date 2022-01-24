import React, {useEffect, useState} from 'react';
import {Progress} from "react-sweet-progress";
import ButtonCust from "../../UI/button/ButtonCust";

const MyProgressBar = ({healthProps, moodProps,trainProps}) => {
    const [health, setHealth] = useState(healthProps.value);
    const [statusHealth, setStatusHealth] = useState(healthProps.status);
    const [mood, setMood] = useState(moodProps.value);
    const [statusMood, setStatusMood] = useState(healthProps.status);
    const [train, setTrain] = useState(trainProps.value);
    const [statusTrain, setStatusTrain] = useState(trainProps.status);

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
        </div>
    );
};

export default MyProgressBar;