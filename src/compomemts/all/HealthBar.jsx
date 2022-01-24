import React, {useEffect, useState} from 'react';
import {Progress} from "react-sweet-progress";

const HealthBar = (value) => {
    const [statusHealth, setStatusHealth] = useState('death');
    function getHealth(health) {
        if (health < 0) return 0
        if (health > 100) return 100
        return health
    }
    useEffect(()=> {
        if(Number(value.health) >= 80) setStatusHealth('good')
        if(Number(value.health) >= 40 && Number(value.health) < 80) setStatusHealth('normal')
        if(Number(value.health) > 0 && Number(value.health)<40) setStatusHealth('bad')
        if(Number(value.health) === 0) setStatusHealth('death')
        //если дракон умер, ничего нельзя сделать
    }, [value.health])
    return (
        <div className="bar">
            Health : <Progress percent={getHealth(value.health)}
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