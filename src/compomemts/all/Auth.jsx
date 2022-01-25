import React, {useContext, useEffect, useState} from 'react';
import InputCust from "../../UI/input/InputCust";
import ButtonCust from "../../UI/button/ButtonCust";
import axios from "axios";
import '../../style/Form.css'
import '../../style/Form.css';
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../App";

const Auth = () => {
    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState('Can\'t be empty')

    const [login, setLogin] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [loginError, setLoginError] = useState('Can\'t be empty')
    const [formValid, setFormValid] = useState(false)

    const [authError,setAuthError] = useState('')
    const {setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate();
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    const loginHandler = (e) => {
        setLogin(e.target.value)
        if (e.target.value === '') {
            setLoginError('Can\'t be empty')
        } else {
            setLoginError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            if (e.target.value === "") setPasswordError('Can\'t be empty')
            else setPasswordError('Length must be greater than 8')
        } else {
            setPasswordError('')
        }
    }
    useEffect(() => {
        if (loginError || passwordError)
            setFormValid(false)
        else setFormValid(true)
    }, [loginError, passwordError])

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
                localStorage.setItem('reputation', res.data.reputation)
                console.log(localStorage.getItem('token'))
                setIsAuth(true)
                navigate('/list');
            }).catch((err) => {
                console.log(err.response)
                if(err.response.status === 500)
                    setAuthError("User not found")
                else if (err.response.status === 401)
                    setAuthError(err.response.data.message)
            }
        )

    }

    return (
        <div className='authentication-form'>
            <form onSubmit={authentication}>
                <h2>Authentication</h2>
                <label htmlFor="login">Login: </label>
                {loginDirty && loginError && <div style={{color: 'red'}}>{loginError}</div>}
                <InputCust value={login}
                           id="login"
                           name="login"
                           type="text"
                           onBlur={e => blurHandler(e)}
                           onChange={(e) => loginHandler(e)}/> <br/>

                <label htmlFor="password">Password: </label>
                {passwordDirty && passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
                <InputCust value={password}
                           id="password"
                           name="password"
                           type="password"
                           onBlur={e => blurHandler(e)}
                           onChange={(e) => passwordHandler(e)}/>
                { authError &&  <div style={{color: 'red'}}>{authError}</div>}
                <ButtonCust disabled={!formValid}>Sign In</ButtonCust>
                <Link to="/reg"> Registration?</Link>
            </form>
        </div>
    );
};

export default Auth;