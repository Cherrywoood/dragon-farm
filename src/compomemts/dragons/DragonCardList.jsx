import React, {useEffect, useState} from 'react';
import "../../style/DragonCardList.css"
import axios from "axios";
import DragonCard from "./DragonCard";


const DragonCardList = () => {
    const [dragons, setDragons] = useState([]);
    useEffect(() => {
        axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).get("http://localhost:8080/dragon/all")
            .then(res => {
                console.log(res)
                setDragons(res.data)
            }).catch((err) => {
            console.log(err.response)
        })
    }, [])
    return (

        <div className="dragon-card-list">
            {dragons.map((dragon, index) =>
                <DragonCard dragon={dragon} key={dragon.id}/>
            )}

        </div>
    );
};

export default DragonCardList;

