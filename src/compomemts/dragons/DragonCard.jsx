import React, {useState} from 'react';
import dragonImg from "../../img/image 12.png";
import '../../style/DragonCard.css'
import {useNavigate} from "react-router-dom";
import HealthBar from "../all/HealthBar";
import MoodBar from "../all/MoodBar";
import TrainBar from "../all/TrainBar";
import TransferDragon from "../transfer/TransferDragon";
const DragonCard = (dragon) => {
    //console.log(dragon.dragon)
    const [nameDragon,setNameDragon] = useState(dragon.dragon.name)
    const navigate = useNavigate();

    const clickHandler = () => {
        if(localStorage.getItem('role') === 'user')
            navigate(`/info/${dragon.dragon.id}`)
        else if(localStorage.getItem('role') === 'worker')
            navigate(`/dragon/${dragon.dragon.id}`)
    }
    return (
        <div className="dragon-card" onClick={clickHandler}>
            <p><span className='name'><b>{nameDragon}</b></span></p>
            <img src={dragonImg} alt="..."/>
            <HealthBar health={dragon.dragon.dragonCharacteristics.health} key='0'/>
            <MoodBar mood={dragon.dragon.dragonCharacteristics.happiness} key='1'/>
            <TrainBar train={dragon.dragon.dragonCharacteristics.training} key='2'/>
            {
                localStorage.getItem('role') === 'user'?
                    <TransferDragon id={dragon.dragon.id}/>
                    : ""
            }
        </div>

    );
};

export default DragonCard;