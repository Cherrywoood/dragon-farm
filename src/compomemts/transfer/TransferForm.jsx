import React, {useEffect, useState} from 'react';
import InputCust from "../../UI/input/InputCust";
import ButtonCust from "../../UI/button/ButtonCust";
import {Link, useNavigate} from "react-router-dom";
import "../../style/Form.css"
import axios from "axios";
import DragonTransferList from "../dragons/DragonTransferList";

const TransferForm = () => {
    const [classBoulder, setClassBoulder] = useState("")
    const [isCheckedBoulder, setIsCheckedBoulder] = useState(false)
    const [classMystery, setClassMystery] = useState("")
    const [isCheckedMystery, setIsCheckedMystery] = useState(false)
    const [classSharp, setClassSharp] = useState("")
    const [isCheckedSharp, setIsCheckedSharp] = useState(false)
    const [classStoker, setClassStoker] = useState("")
    const [isCheckedStoker, setIsCheckedStoker] = useState(false)
    const [classStrike, setClassStrike] = useState("")
    const [isCheckedStrike, setIsCheckedStrike] = useState(false)
    const [classTidal, setClassTidal] = useState("")
    const [isCheckedTidal, setIsCheckedTidal] = useState(false)
    const [classTracker, setClassTracker] = useState("")
    const [isCheckedTracker, setIsCheckedTracker] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const [type, setType] = useState("temporal")

    useEffect(() => {

        if (!isCheckedBoulder && !isCheckedMystery && !isCheckedSharp && !isCheckedStoker && !isCheckedStrike
        && !isCheckedTidal && !isCheckedTracker)
            setFormValid(false)
        else setFormValid(true)

    }, [isCheckedBoulder,isCheckedMystery, isCheckedSharp, isCheckedStoker, isCheckedStrike,isCheckedTidal,isCheckedTracker])
    const navigate = useNavigate();
    const typeHandler = (e) => {
        setType(e.target.value)
    }

    const find = (e) => {
        e.preventDefault();
        const classes = []
        if(isCheckedBoulder) classes.push(classBoulder)
        if(isCheckedMystery) classes.push(classMystery)
        if(isCheckedSharp) classes.push(classSharp)
        if(isCheckedStoker) classes.push(classStoker)
        if(isCheckedStrike) classes.push(classStrike)
        if(isCheckedTidal) classes.push(classTidal)
        if(isCheckedTracker) classes.push(classTracker)
        const transfer_info = {
            classes: classes,
            type: type
        };
        console.log(transfer_info)
        axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).post(`http://localhost:8080/transfer/all`, transfer_info)
            .then(res => {
                console.log(res)
                localStorage.setItem('dragonTransfer', res)
                navigate("/transfer/list")
            }).catch((err) => {
                console.log(err.response)

            }
        )
    }
    const bolderHandler = (e) => {

      if(e.target.checked) {
          setClassBoulder("Boulder")
          setIsCheckedBoulder(true)
      } else {
          setClassBoulder("")
          setIsCheckedBoulder(false)
      }
    }
    const mysteryHandler = (e) => {
        if(e.target.checked) {
            setClassMystery("Mystery")
            setIsCheckedMystery(true)
        } else {
            setClassMystery("")
            setIsCheckedMystery(false)
        }
    }
    const sharpHandler = (e) => {
        if(e.target.checked) {
            setClassSharp("Sharp")
            setIsCheckedSharp(true)
        } else {
            setClassSharp("")
            setIsCheckedSharp(false)
        }
    }
    const  stokerHandler = (e) => {
        if(e.target.checked) {
            setClassStoker("Stoker")
            setIsCheckedStoker(true)
        } else {
            setClassStoker("")
            setIsCheckedStoker(false)
        }
    }
    const strikeHandler = (e) => {
        if(e.target.checked) {
            setClassStrike("Strike")
            setIsCheckedStrike(true)
        } else {
            setClassStrike("")
            setIsCheckedStrike(false)
        }
    }
    const tidalHandler = (e) => {
        if(e.target.checked) {
            setClassTidal("Tidal")
            setIsCheckedTidal(true)
        } else {
            setClassTidal("")
            setIsCheckedTidal(false)
        }
    }
    const trackerHandler = (e) => {
        if(e.target.checked) {
            setClassTracker("Tracker")
            setIsCheckedTracker(true)
        } else {
            setClassTracker("")
            setIsCheckedTracker(false)
        }
    }
    return (
        <div className="transfer-form">
         <form onSubmit={find}>
                <h2>Choose the characteristics of the dragon</h2>
                Dragon Class:
                <div>
                    <label><input type="checkbox" onClick={bolderHandler}/>
                        Boulder
                    </label>
                    <label>
                        <input type="checkbox" onClick={mysteryHandler}/>
                        Mystery
                    </label>
                    <label>
                        <input type="checkbox" onClick={sharpHandler}/>
                        Sharp
                    </label>
                    <label> <input type="checkbox" onClick={sharpHandler}/>
                        Stoker
                    </label>
                    <label> <input type="checkbox" onClick={strikeHandler}/>
                        Strike
                    </label>
                    <label> <input type="checkbox" onClick={tidalHandler}/>
                        Tidal
                    </label>
                    <label> <input type="checkbox" onClick={trackerHandler}/>
                        Tracker
                    </label>
                </div>
                Rental type:
                <div>
                    <label> <input type="radio"
                                   value="temporal"
                                   onChange={typeHandler}
                                   name="type"
                                   checked="checked"/>
                        Temporal </label>
                    <label> <input type="radio"
                                   value="permanent"
                                   onChange={typeHandler}
                                   name="type"
                    />
                        Permanent </label>
                </div>
                <div><ButtonCust disabled={!formValid}>Find the dragon</ButtonCust></div>
            </form>

        </div>
    );
};

export default TransferForm;