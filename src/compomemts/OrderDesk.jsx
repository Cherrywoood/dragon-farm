import React, {useState} from 'react';
import "../style/OrderDesk.css"
import axios from "axios";
import ButtonCust from "../UI/button/ButtonCust";
import {Link} from "react-router-dom";
import OrderItem from "./OrderItem";
import OutingForm from "./OutingForm";

const OrderDesk = () => {
    const [orders, setOrders] = useState([{
        id: 1, dragonType: "Smothering Smokebreath", sender: "Eyvind", time: "2010-03-06 10:18:30"
    },
        {id: 2, dragonType: "Smothering Smokebreath", sender: "Eyvind", time: "2010-03-06 10:18:30"}]);
    const [modelActive,setModelActive] = useState(false)
    const [focusOrder, setFocusOrder] = useState('')
    const getActualOrders = () => {
        axios.get(`...`)
            .then(res => {
                setOrders({orders});
            })
    }

    return (
        <div className="order-desk">
            <table>
                <caption><h3>Order Desk</h3></caption>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Dragon Type</th>
                    <th>Sender</th>
                    <th>Time</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order,index) =>
                    <OrderItem order={order} setActive = {setModelActive} setFocusOrder = {setFocusOrder} key={index} />
                )}
                </tbody>
            </table>
            <OutingForm active={modelActive} setActive={setModelActive} info={focusOrder}/>


        </div>
    );
};

    export default OrderDesk;