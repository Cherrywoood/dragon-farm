import React, {useContext} from 'react';
import ButtonCust from "../../UI/button/ButtonCust";
import axios from "axios";

const TransferDragon = ({id, setError, setVisible}) => {
    const transferHandler = (e) => {
      e.stopPropagation()
        axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).post("http://localhost:8080/transfer/", {
            transferType: localStorage.getItem('transferType'),
            dragonId: id
        })
            .then(res => {
                console.log(res)
            }).catch((err) => {
                console.log(err.response)
            if(err.response.status === 409) {
                setError(err.response.data.message)
                setVisible(true)
            }
        })
    }
    return (
        <ButtonCust onClick={transferHandler}>Rent</ButtonCust>
    );
};

export default TransferDragon;