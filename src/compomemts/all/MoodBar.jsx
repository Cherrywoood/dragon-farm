import React, {useEffect, useState} from 'react';
import {Progress} from "react-sweet-progress";

const MoodBar = (value) => {
    const [statusMood, setStatusMood] = useState('bad');
    function getMood(mood) {
        if (mood < 0) return 0
        if (mood > 100) return 100
        return mood
    }
    useEffect(() => {
        if (Number(value.mood) >= 80) setStatusMood('good')
        if (Number(value.mood) >= 40 && Number(value.mood) < 80) setStatusMood('normal')
        if (Number(value.mood) > 0 && Number(value.mood) < 40) setStatusMood('bad')
    }, [value.mood])
    return (
        <div className="bar">
            Mood: <Progress percent={getMood(value.mood)}
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