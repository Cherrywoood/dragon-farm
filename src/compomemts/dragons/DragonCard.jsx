import React, {useState} from 'react';
import dragonImg from "../../img/image 12.png";
import {Progress} from "@chakra-ui/react";
import MyProgressBar from "../all/MyProgressBar";
import '../../style/DragonCard.css'
import ButtonCust from "../../UI/button/ButtonCust";
import {useNavigate} from "react-router-dom";
const DragonCard = ({name,id}) => {
    const [nameDragon,setNameDragon] = useState(name.name)
    const navigate = useNavigate();
console.log(id)
    const clickHandler = () => {
        navigate(`/info/${id}`);
    }
    return (
        <div className="dragon-card" onClick={clickHandler}>
            <p><span className='name'><b>{nameDragon}</b></span></p>
            <img src={dragonImg} alt="..."/>
            <MyProgressBar/>
        </div>

    );
};

export default DragonCard;