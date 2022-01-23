import React, {useState} from 'react';
import InputCust from "../../UI/input/InputCust";
import ButtonCust from "../../UI/button/ButtonCust";
import axios from "axios";
import '../../style/Form.css'
import Header from "./Header";
import '../../style/Form.css';
import {Link} from "react-router-dom";

const Auth = () => {
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')

    const authentication = (e)=> {
        e.preventDefault();
        //валидация
        const user_info = {
            userName: login,
            password: password
        };
        console.log(user_info)
//неверный пароль или логин
        //  setLogin('')
        //  setPassword('')
        axios.post(`http://localhost:8080/user/login`, { user_info })
            .then(res => {
                console.log(res);
            }).catch((res)=>
            console.log(res))
    }
    return (
        <div className='authentication-form'>
            <form onSubmit={authentication}>
                <h2>Authentication</h2>
                <label htmlFor="login">Login: </label>
                <InputCust value={login}
                           id="login"
                           type="text"
                           onChange={(e)=>setLogin(e.target.value)}/> <br/>

                <label htmlFor="password">Password: </label>
                <InputCust value={password}
                           id="password"
                           type="password"
                           onChange={(e)=>setPassword(e.target.value)}/>
                <ButtonCust>Sign In</ButtonCust>
                <Link to="/reg"> Registration?</Link>
            </form>
        </div>
    );
};

export default Auth;