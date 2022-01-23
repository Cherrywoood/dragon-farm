import React from 'react';
import ButtonCust from "../UI/button/ButtonCust";
import axios from "axios";

const OrderItem = ({order,setActive, setFocusOrder}) => {

    return (
        <tr>
            <td>{order.id}</td>
            <td>{order.dragonType}</td>
            <td>{order.sender}</td>
            <td>{order.time}</td>
            <td>
                <ButtonCust onClick={()=> {
                    setActive(true)
                    setFocusOrder({order})
                    console.log({order})
                }
                }>Take</ButtonCust>
            </td>
        </tr>
    );
};

export default OrderItem;