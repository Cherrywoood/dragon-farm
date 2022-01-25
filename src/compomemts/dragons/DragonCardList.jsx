import React, {useEffect, useState} from 'react';
import "../../style/DragonCardList.css"
import axios from "axios";
import DragonCard from "./DragonCard";
import ReturnDragon from "../transfer/ReturnDragon";
import ModalWindow from "../../UI/modal/ModalWindow";


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

    const removeDragon = (id)=>{
        console.log('dragonRent')
        setDragons(dragons.filter(d => d.id !== id))
    }
    return (

        <div className="dragon-card-list">
            {
                dragons.length !== 0 ?
                    dragons.map((dragon, index) =>
                        localStorage.getItem('role') === 'user' ?
                            <div className="card" key={dragon.id}>
                                <DragonCard dragon={dragon}/>
                                <ReturnDragon remove={removeDragon} id={dragon.id}/>
                            </div>
                            :
                            <div className="card" key={dragon.id}>
                                <DragonCard dragon={dragon}/>
                            </div>)
                    :
                    <span className="no-dragon">List's empty...</span>
            }

        </div>
    );
};

export default DragonCardList;

