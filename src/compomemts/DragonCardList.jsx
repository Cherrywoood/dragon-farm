import React from 'react';
import DragonCard from "./DragonCard";
import "../style/DragonCardList.css"

const DragonCardList = () => {

    return (
        <div className="dragon-card-list">
            <DragonCard/>
            <DragonCard/>
            <DragonCard/>
            <DragonCard/>
            <DragonCard/>
            <DragonCard/>

        </div>
    );
};

export default DragonCardList;