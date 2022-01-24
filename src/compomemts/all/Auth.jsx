import React, {useContext, useState} from 'react';
import InputCust from "../../UI/input/InputCust";
import ButtonCust from "../../UI/button/ButtonCust";
import axios from "axios";
import '../../style/Form.css'
import Header from "./Header";
import '../../style/Form.css';
import {Link, useNavigate} from "react-router-dom";
import $api from "../../http/http";
import {AuthContext, UserContext} from "../../App";

const Auth = () => {
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [authError,setAuthError] = useState('')
    const {Auth,setIsAuth} = useContext(AuthContext)
    const {user,setUser} = useContext(UserContext)
    const navigate = useNavigate();
    const authentication = (e)=> {
        e.preventDefault();
        const user_info = {
            userName: login,
            password: password
        };
        console.log(user_info)
        axios.post(`http://localhost:8080/user/login`, user_info)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.jwt)
                localStorage.setItem('id',res.data.id)
                localStorage.setItem('name', res.data.name)
                localStorage.setItem('surname', res.data.surname)
                localStorage.setItem('role', res.data.role)
                localStorage.setItem('workerType',res.data.workerType)
                localStorage.setItem('userName',res.data.userName)
                console.log(localStorage.getItem('token'))
                console.log(user)
                setIsAuth(true)
                navigate('/list');
            }).catch((err) => {
                console.log(err.response)
                if(err.response.status === 404)
                    setAuthError(err.response.data.message)
                else if (err.response.status === 403)
                    setAuthError('Invalid password')
            }
        )
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
                { authError &&  <div style={{color: 'red'}}>{authError}</div>}
                <ButtonCust>Sign In</ButtonCust>
                <Link to="/reg"> Registration?</Link>
            </form>
        </div>
    );
};

export default Auth;