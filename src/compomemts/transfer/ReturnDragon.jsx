import React, {useContext} from 'react';
import ButtonCust from "../../UI/button/ButtonCust";
import axios from "axios";
import {RepContext} from "../../App";

const ReturnDragon = ({id}) => {
    console.log(id)
    const {setReputation} = useContext(RepContext)
    const returnHandler = (e) => {
        e.stopPropagation()
        axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).get(`http://localhost:8080/transfer/${id}`)
            .then(res => {
                console.log(res)
                setReputation(res.data.reputation)
                localStorage.setItem('reputation',res.data.reputation)

            }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <ButtonCust onClick={returnHandler}>Return</ButtonCust>
    );
};

export default ReturnDragon;