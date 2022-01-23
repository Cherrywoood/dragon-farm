import React, {useContext, useEffect, useState} from 'react';
import '../../style/Form.css'
import InputCust from "../../UI/input/InputCust";
import ButtonCust from "../../UI/button/ButtonCust";
import axios from "axios";
import '../../style/Form.css'



const Reg = () => {


    const [name, setName] = useState('')
    const [nameValid, setNameValid] = useState(false)
    const [nameError, setNameError] = useState('')

    const [surname, setSurname] = useState('')
    const [surnameValid, setSurnameValid] = useState(false)
    const [surnameError, setSurnameError] = useState('')

    const [gender, setGender] = useState('')
    const [genderValid, setGenderValid] = useState(false)
    const [genderError, setGenderError] = useState('')

    const [date, setDate] = useState('')
    const [dateValid, setDateValid] = useState(false)
    const [dateError, setDateError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(false)
    const [passwordError, setPasswordError] = useState('')

    const [login, setLogin] = useState('')
    const [loginValid, setLoginValid] = useState(false)
    const [loginError, setLoginError] = useState('')
    const [formValid, setFormValid] = useState(false)

    const handleChange = (e) => {
        setGender(e.target.value);
    }

    useEffect(()=> {
        if(nameValid && surnameValid && genderValid && dateValid && loginValid && passwordValid)
            setFormValid(true)
        else setFormValid(false)
    })
    const validHandler = () => {
        if (name === '') {
            setNameError('Can\'t be empty')
            setNameValid(false)
        }
        else {
            setNameValid(true)
            setNameError('')
        }

        if (surname === '') {
            setSurnameError('Can\'t be empty')
            setSurnameValid(false)
        }
        else {
            setSurnameValid(true)
            setSurnameError('')
        }

        if (date === '') {
            setDateValid('Can\'t be empty')
            setDateValid(false)
        }
        else {
            setDateValid(true)
            setDateError('')
        }
        if (gender === '') {
            setGenderError('Can\'t be empty')
            setGenderValid(false)
        }
        else {
            setGenderValid(true)
            setGenderError('')
        }
        if (login === '') {
            setLoginError('Can\'t be empty')
            setLoginValid(false)
        }
        else {
            setLoginValid(true)
            setLoginError('')
        }
        if (password.length < 8) {
            if (password === "") setPasswordError('Can\'t be empty')
            else setPasswordError('Length must be greater than 8')
            setPasswordValid(false)
        } else {
            setPasswordValid(true)
            setPasswordError('')
        }
    }
    const registration = (e) => {
        e.preventDefault();
        //такой логин уже существует


        validHandler()
        if(formValid) {
            const user_info = {
                name: name,
                surname: surname,
                gender: gender,
                date: date,
                login: login,
                password: password
            };
            console.log(user_info)
       axios.post(`http://localhost:8080/user/register`, { user_info })
                 .then(res => {
                     console.log(res);
                 }).catch((res)=>
                     console.log(res))
        } else console.log('форма не валидна')

    }

    return (
        <div className='registration-form'>
            <form onSubmit={registration}>
                <h2>Registration</h2>
                <label htmlFor="name">Name: </label>
                {!nameValid && nameError && <div style={{color: 'red'}}>{nameError}</div>}
                <InputCust value={name}
                           id="name"
                           type="text"
                           onChange={(e) => setName(e.target.value)}/> <br/>
                <label htmlFor="surname">Surname: </label>
                {!surnameValid && surnameError && <div style={{color:'red'}}>{surnameError}</div>}
                <InputCust value={surname}
                           id="surname"
                           type="text"
                           onChange={(e) => setSurname(e.target.value)}/> <br/>

                Gender: <br/>
                {!genderValid && genderError && <div style={{color:'red'}}>{genderError}</div>}
                <input type="radio" value="male" id="male"
                       onChange={handleChange} name="gender"/>
                <label htmlFor="male">Male      </label>

                <input type="radio" value="female" id="female"
                       onChange={handleChange} name="gender"/>
                <label htmlFor="female">Female</label> <br/>

                <label htmlFor="date">Date of Birth: </label>
                {!dateValid && dateError && <div style={{color:'red'}}>{dateError}</div>}
                <InputCust value={date}
                           id="date"
                           type="date"
                           onChange={(e) => setDate(e.target.value)}/> <br/>

                <label htmlFor="login">Login: </label>
                {!loginValid && loginError && <div style={{color:'red'}}>{loginError}</div>}
                <InputCust value={login}
                           id="login"
                           type="text"
                           onChange={(e) => setLogin(e.target.value)}/> <br/>

                <label htmlFor="password">Password: </label>
                {!passwordValid && passwordError && <div style={{color:'red'}}>{passwordError}</div>}
                <InputCust value={password}
                           id="password"
                           type="password"
                           onChange={(e) => setPassword(e.target.value)}/>
                <ButtonCust type="submit">Sign Up</ButtonCust>
            </form>
        </div>
    );
};

export default Reg;