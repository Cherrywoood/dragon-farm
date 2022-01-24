import React, {useEffect, useState} from 'react';
import {Progress} from "react-sweet-progress";

const MoodBar = (value) => {
    //console.log(value.mood)
    let [mood, setMood] = useState(value.mood);
    const [statusMood, setStatusMood] = useState('bad');

    function getMood(mood) {
        if (mood < 0) return 0
        if (mood > 100) return 100
        return mood
    }
    useEffect(() => {
        if (Number(mood) >= 80) setStatusMood('good')
        if (Number(mood) >= 40 && Number(mood) < 80) setStatusMood('normal')
        if (Number(mood) > 0 && Number(mood) < 40) setStatusMood('bad')
    }, [mood])
    return (
        <div className="bar">
            Mood: <Progress percent={getMood(mood)}
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
        </div>
    );
};

export default MoodBar;