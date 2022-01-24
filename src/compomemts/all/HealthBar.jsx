import React, {useEffect, useState} from 'react';
import {Progress} from "react-sweet-progress";

const HealthBar = (value) => {
   // console.log(value.health)
    const [health, setHealth] = useState(value.health);
    const [statusHealth, setStatusHealth] = useState('death');
    useEffect(()=> {
        if(Number(health) >= 80) setStatusHealth('good')
        if(Number(health) >= 40 && Number(health) < 80) setStatusHealth('normal')
        if(Number(health) > 0 && Number(health)<40) setStatusHealth('bad')
        if(Number(health) === 0) setStatusHealth('death')
        //если дракон умер, ничего нельзя сделать
    }, [health])
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
        </div>
    );
};

export default HealthBar;