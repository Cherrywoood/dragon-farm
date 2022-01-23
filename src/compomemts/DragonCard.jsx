import React, {useState} from 'react';
import dragonImg from "../img/image 12.png";
import {Progress} from "@chakra-ui/react";
import MyProgressBar from "./all/MyProgressBar";
import '../style/DragonCard.css'
import {Navigate} from "react-router-dom";
import ButtonCust from "../UI/button/ButtonCust";
const DragonCard = (props) => {
    const [name,setName] = useState('Name Dragon')
    const clickHandler = () => {
        <Navigate to='/info'/>
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