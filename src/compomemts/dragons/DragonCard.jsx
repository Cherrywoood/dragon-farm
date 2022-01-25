import React, {useState} from 'react';
import dragonImg from "../../img/image 12.png";
import '../../style/DragonCard.css'
import {useNavigate} from "react-router-dom";
import HealthBar from "../all/HealthBar";
import MoodBar from "../all/MoodBar";
import TrainBar from "../all/TrainBar";

const DragonCard = ({dragon}) => {

    const [nameDragon, setNameDragon] = useState(dragon.name)
    const navigate = useNavigate();
    const clickHandler = () => {

        if (window.location.pathname === '/transfer/list')
            navigate(`/info/${dragon.id}`)
        else if (window.location.pathname === '/list')
            navigate(`/dragon/${dragon.id}`)
    }
    return (
        <div className="dragon-card" onClick={clickHandler}>
            <p><span className='name'><b>{nameDragon}</b></span></p>
            <img src={dragonImg} alt="..."/>
            <HealthBar health={dragon.dragonCharacteristics.health} key='0'/>
            <MoodBar mood={dragon.dragonCharacteristics.happiness} key='1'/>
            <TrainBar train={dragon.dragonCharacteristics.training} key='2'/>
        </div>

    );
};

export default DragonCard;