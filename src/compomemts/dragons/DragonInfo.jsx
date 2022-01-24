import React, {useEffect, useState} from 'react';
import dragonImg from '../../img/image 12.png';
import '../../style/Dragon.css'
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const DragonInfo = () => {
    const [dragon, setDragon] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    function getAge() {}
    useEffect(() => {
        axios.create({
            baseURL: '',
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).get(`http://localhost:8080/dragon/${params.id}`)
            .then(res => {
                console.log(res.data)
                setDragon(res.data)
            }).catch((err) => {
            console.log(err.response)
        })
    }, [])
    return (
        <div className="dragon-info">
            <button onClick={()=>navigate("/transfer/list")}>←</button>

            { dragon &&
                <div className="content">
                    <img src={dragonImg} alt="..."/>
                    <h1>{dragon.name}</h1>
                    <div><h3>Main info</h3>
                        Class: {dragon.className} <br/>
                        Type: {dragon.typeName} <br/>
                        Gender: {dragon.gender} <br/>
                        Age: {dragon.dateOfBirth} <br/>
                        Status: {dragon.dragonStatus} <br/>
                        Training Level: {dragon.trainingLevel}<br/>
                    </div>
                    <div>
                        <h3>Appearance</h3>
                        Color: {dragon.dragonAppearance.color}<br/>
                        Size: {dragon.dragonAppearance.size}<br/>
                        Type of fire: {dragon.dragonAppearance.fireType}<br/>
                        Features: {dragon.dragonAppearance.features}<br/>
                    </div>
                    <div>
                        <h3>Abilities</h3>
                        {dragon.abilities.map((ability, index)=> (
                                <span key={index}>
                                    {index+1}. {ability}
                                    <br/>
                                </span>
                            )
                        )}
                    </div>
                </div>
            }
        </div>
    );
};

export default DragonInfo;
