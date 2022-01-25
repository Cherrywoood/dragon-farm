import React, {useEffect, useState} from 'react';
import DragonCard from "../dragons/DragonCard";
import TransferDragon from "./TransferDragon";
import ModalWindow from "../../UI/modal/ModalWindow";

const DragonTransferList = () => {
    const [dragons, setDragons] = useState([])
    const [visible,setVisible] = useState(false)
    const [error, setError] = useState('')
    useEffect(()=>{
        setDragons(JSON.parse(localStorage.getItem('dragonTransfer')))
        console.log(JSON.parse(localStorage.getItem('dragonTransfer'))
        )
    },[])
    const removeDragon = (id)=>{
        console.log('dragonTransfer')
        setDragons(dragons.filter(d => d.id !== id))
    }
    return (
            <div className="dragon-card-list">
                <ModalWindow visible={visible} setVisible={setVisible}>{error}</ModalWindow>
                {
                    dragons.length !== 0?
                        dragons.map(dragon =>
                            <div className="card" key={dragon.id}>
                                <DragonCard dragon={dragon} />
                                <TransferDragon id={dragon.id} setError={setError}
                                                setVisible={setVisible} remove={removeDragon}/>
                            </div>
                    )
                        :
                        <span className="no-dragon">No dragons found by request...</span>
                }
            </div>
    );
};

export default DragonTransferList;