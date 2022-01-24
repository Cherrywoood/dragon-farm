import React, {useState} from 'react';
import dragonImg from "../../img/image 12.png";
import {Progress} from "@chakra-ui/react";
import MyProgressBar from "../all/MyProgressBar";
import '../../style/DragonCard.css'
import ButtonCust from "../../UI/button/ButtonCust";
import {useNavigate} from "react-router-dom";
const DragonCard = (props) => {
    const [name,setName] = useState('Name DragonInfo')
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/info');
    }
    return (
        <div className="dragon-card" onClick={clickHandler}>
            <p><span className='name'><b>{name}</b></span></p>
            <img src={dragonImg} alt="..."/>
            <MyProgressBar/>
            <ButtonCust onClick={clickHandler}>dfs</ButtonCust>
        </div>

    );
};

export default DragonCard;