import React, {useState} from 'react';
import dragonImg from "../../img/image 12.png";
import '../../style/DragonCard.css'
import {useNavigate} from "react-router-dom";
import HealthBar from "../all/HealthBar";
import MoodBar from "../all/MoodBar";
import TrainBar from "../all/TrainBar";
const DragonCard = (dragon) => {
    console.log(dragon.dragon)
    const [nameDragon,setNameDragon] = useState(dragon.dragon.name)
    const navigate = useNavigate();

    const clickHandler = () => {
        console.log('worker')
        if(localStorage.getItem('role') === 'user')
             {console.log('user')
            navigate(`/info/${dragon.dragon.id}`)
        }

        else if(localStorage.getItem('role') === 'worker')
        {
            console.log('worker')
            navigate(`/dragon/${dragon.dragon.id}`)
        }
    }
    return (
        <div className="dragon-card" onClick={clickHandler}>
            <p><span className='name'><b>{nameDragon}</b></span></p>
            <img src={dragonImg} alt="..."/>
            {dragon.dragon.dragonCharacteristics.map((param, index) =>
                index === 0? <HealthBar health={param.value} key={index}/> :
                    index === 1? <MoodBar mood={param.value} key={index}/> :
                        index === 2? <TrainBar train={param.value} key={index}/> : ''
            )}

        </div>

    );
};

export default DragonCard;