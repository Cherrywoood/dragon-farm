import React, {useState} from 'react';
import dragonImg from "../../img/image 12.png";
import MyProgressBar from "../all/MyProgressBar";
import DragonCareTaker from "../caretaker/DragonCareTaker";
import '../../style/Dragon.css';
const Dragon = () => {
    const [name,setName] = useState('Dragon')
    return (
        <div className="dragon">

            <div className="dragon-content"><img src={dragonImg} alt="..."/></div>
            <div id="dragon__info" className="dragon-content">
                <span className='name'>{name}</span>
                <DragonCareTaker/>
            </div>
        </div>
    );
};

export default Dragon;