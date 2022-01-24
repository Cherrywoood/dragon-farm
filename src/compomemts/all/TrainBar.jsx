import React, {useEffect, useState} from 'react';
import {Progress} from "react-sweet-progress";

const TrainBar = (value) => {
    const [statusTrain, setStatusTrain] = useState('bad');
    function getTrain(train) {
        if (train < 0) return 0
        if (train > 100) return 100
        return train
    }

    useEffect(() => {
        if (Number(value.train) >= 80) setStatusTrain('good')
        if (Number(value.train) >= 40 && Number(value.train) < 80) setStatusTrain('normal')
        if (Number(value.train) > 0 && Number(value.train) < 40) setStatusTrain('bad')
    }, [value.train])

    return (
        <div className="bar">
            Train: <Progress percent={getTrain(value.train)}
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

export default TrainBar;