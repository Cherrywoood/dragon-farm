import React, {useContext} from 'react';
import ButtonCust from "../../UI/button/ButtonCust";
import axios from "axios";

const TransferDragon = (id) => {
    const transferHandler = (e) => {
      e.stopPropagation()
        console.log({ transferType: localStorage.getItem('transferType'),
            dragonId: id.id})
        axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).post("http://localhost:8080/transfer/", {
            transferType: localStorage.getItem('transferType'),
            dragonId: id.id
        })
            .then(res => {
                console.log(res)
            }).catch((err) => {
            console.log(err.response)
        })
    }
    return (
        <ButtonCust onClick={transferHandler}>Rent</ButtonCust>
    );
};

export default TransferDragon;