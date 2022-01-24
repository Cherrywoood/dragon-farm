import React, {useEffect, useState} from 'react';
import DragonCard from "./DragonCard";

const DragonTransferList = () => {
    const [dragons, setDragons] = useState([])
    useEffect(()=>{
        setDragons(JSON.parse(localStorage.getItem('dragonTransfer')))
        console.log(JSON.parse(localStorage.getItem('dragonTransfer'))
        )
    },[])
    return (
            <div className="dragon-card-list">
                {
                    dragons.length !== 0?
                        dragons.map(dragon =>
                            <DragonCard dragon={dragon} key={dragon.id}/>)
                        :
                        <span className="no-dragon">No dragons found by request...</span>
                }
            </div>
    );
};

export default DragonTransferList;