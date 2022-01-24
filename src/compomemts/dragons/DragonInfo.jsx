import React, {useState} from 'react';
import Header from "../all/Header";
import dragonImg from '../../img/image 12.png';
import '../../style/Dragon.css'
const DragonInfo = (props) => {
    console.log(props.dragon)
    const [type,setType] = useState(props.dragon.type);
    const [className,setClassName] = useState(props.dragon.class);
    const [rarity,setRarity] = useState(props.dragon.rarity);
    const [way_of_taming,setWay_of_taming] = useState(props.dragon.way_of_taming);
    const [trainable,setTrainable] = useState(props.dragon.trainable);
    const [active_time,setActive_time] = useState(props.dragon.active_time);
    const [mating_season,setMating_season] = useState(props.dragon.mating_season);
    const [hatching_age,setHatching_age] = useState(props.dragon.hatching_age);
    const [puberty_age,setPuberty_age] = useState(props.dragon.puberty_age);
    const [size,setSize] = useState(props.dragon.appearance.size);
    const [color,setColor] = useState(props.dragon.appearance.color);
    const [fireType,setFireTyp] = useState(props.dragon.appearance.fire_type);
    const [features,setFeatures] = useState(props.dragon.appearance.features);

    return (
        <div className="dragon-info">
            <h2>{type}</h2><br/>
            <img src={dragonImg} alt="..."/>
            <h3>Main information</h3>
            Class: {className}<br/>
            Rarity: {rarity}<br/>
            Trainable: {trainable} <br/>
            Active Time: {active_time} <br/>
            Mating Season: {mating_season} <br/>
            Hatching Age: {hatching_age} <br/>
            Puberty Age: {puberty_age} <br/>
            <h4>Way of Taming</h4>
            {way_of_taming}<br/>
            <h4>Appearance</h4>
            size: {size}<br/>
            color: {color}<br/>
            type of fire: {fireType}<br/>
            features: {features}<br/>

        </div>
    );
};

export default DragonInfo;