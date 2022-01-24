import React, {useContext, useEffect, useState} from 'react';
import '../../style/Form.css'
import InputCust from "../../UI/input/InputCust";
import ButtonCust from "../../UI/button/ButtonCust";
import axios from "axios";
import '../../style/Form.css'
import {useNavigate} from "react-router-dom";
import $api from "../../http/http";


const Reg = () => {
    const [name, setName] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState('Can\'t be empty')

    const [surname, setSurname] = useState('')
    const [surnameDirty, setSurnameDirty] = useState(false)
    const [surnameError, setSurnameError] = useState('Can\'t be empty')

    const [gender, setGender] = useState('male')

    const [date, setDate] = useState('')
    const [dateDirty, setDateDirty] = useState(false)
    const [dateError, setDateError] = useState('Can\'t be empty')

    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState('Can\'t be empty')

    const [login, setLogin] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [loginError, setLoginError] = useState('Can\'t be empty')
    const [formValid, setFormValid] = useState(false)

    const [regError,setRegError] = useState('')
    const navigate = useNavigate();

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'surname':
                setSurnameDirty(true)
                break
            case 'date':
                setDateDirty(true)
                break
            case 'login':
                setLoginDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value === '') {
            setNameError('Can\'t be empty')
        } else {
            setNameError('')
        }
    }
    const surnameHandler = (e) => {
        setSurname(e.target.value)
        if (e.target.value === '') {
            setSurnameError('Can\'t be empty')
        } else {
            setSurnameError('')
        }
    }
    const genderHandler = (e) => {
        setGender(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
        if (e.target.value === '') {
            setDateError('Can\'t be empty')
        } else {
            setDateError('')
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

        if (nameError || surnameError || dateError || loginError || passwordError)
            setFormValid(false)
        else setFormValid(true)
    }, [nameError, surnameError, dateError, loginError, passwordError])

    const registration = (e) => {
        e.preventDefault();

        if (formValid) {
            const user_info = {
                name: name,
                surname: surname,
                gender: gender,
                dateOfBirth: date,
                userName: login,
                password: password
            };
            console.log(user_info)
            axios.post(`http://localhost:8080/user/register`, user_info)
                .then(res => {
                    navigate('/auth');
                }).catch((err) => {
                    console.log(err.response)
                if(err.response.status === 409)
                    setRegError(err.response.data.message)
                else if (err.response.status === 400)
                    setRegError('bad request')

                }
            )
        } else console.log('форма не валидна')

    }

    return (
        <div className='registration-form'>
            <form onSubmit={registration}>
                <h2>Registration</h2>
                <label htmlFor="name">Name: </label>
                {nameDirty && nameError && <div style={{color: 'red'}}>{nameError}</div>}
                <InputCust value={name}
                           id="name"
                           name="name"
                           type="text"
                           onBlur={e => blurHandler(e)}
                           onChange={e => nameHandler(e)}/> <br/>
                <label htmlFor="surname">Surname: </label>
                {surnameDirty && surnameError && <div style={{color: 'red'}}>{surnameError}</div>}
                <InputCust value={surname}
                           id="surname"
                           name="surname"
                           type="text"
                           onBlur={e => blurHandler(e)}
                           onChange={e => surnameHandler(e)}/> <br/>

                Gender: <br/>
                <input type="radio"
                       value="male"
                       id="male"
                       onBlur={e => blurHandler(e)}
                       onChange={e => genderHandler(e)}
                       name="gender"
                       checked={true}
                />
                <label htmlFor="male">Male </label>

                <input type="radio"
                       value="female"
                       id="female"
                       onBlur={e => blurHandler(e)}
                       onChange={e => genderHandler(e)}
                       name="gender"
                />
                <label htmlFor="female">Female</label> <br/>

                <label htmlFor="date">Date of Birth: </label>
                {dateDirty && dateError && <div style={{color: 'red'}}>{dateError}</div>}
                <InputCust value={date}
                           id="date"
                           name="date"
                           type="date"
                           onBlur={e => blurHandler(e)}
                           onChange={(e) => dateHandler(e)}/> <br/>

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
                { regError &&  <div style={{color: 'red'}}>{regError}</div>}
                <ButtonCust type="submit" disabled={!formValid}>Sign Up</ButtonCust>
            </form>
        </div>
    );
};

export default Reg;