import React, {useEffect, useState} from 'react';
import DragonCard from "./DragonCard";

const DragonTransferList = () => {
    const [dragon, setDragon] = useState()
    useEffect(()=>{
        setDragon(localStorage.getItem('dragonTransfer'))
        console.log(dragon)
    },[])
    return (
            <div className="dragon-card-list">
                {console.log(dragon)}

            </div>
    );
};

export default DragonTransferList;