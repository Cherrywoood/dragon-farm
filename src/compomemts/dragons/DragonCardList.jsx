import React, {useEffect, useState} from 'react';
import DragonCard from "./DragonCard";
import "../../style/DragonCardList.css"
import {useHistory, useNavigate} from "react-router-dom";
import axios from "axios";


const DragonCardList = () => {
    const [dragons,setDragons] = useState([1,2,3,4,5,6]);
    useEffect(()=> {
    axios.create({
            baseURL:'',
            headers:{
                'Authorization':`${localStorage.getItem('token')}`
            }
        }).get("http://localhost:8080/dragon/130")
            .then(res => {
                console.log(res)
            }).catch((err)=>{
                console.log(err.response)
            })
    })
    return (
        <div className="dragon-card-list">
           {/* dragons.map((dragon, index) =>
                <DragonCard name= {dragon} id={index} key={index}/>
            )*/}

        </div>
    );
};

export default DragonCardList;

/*axios.create({
           baseURL:'',
           headers:{
               'Authorization':`${localStorage.getItem('token')}`
           }
       }).get("http://localhost:8080/dragon/all")
           .then(res => {
               console.log(res)
           }).catch((err)=>{
           console.log(err.response)
       })*/
/*console.log(localStorage.getItem('token'))
let headers = new Headers();


headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('Authorization', `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjE4ODA4NzUiLCJ1c2VySWQiOjF9.-hrFrPDL06_AsOv3j2bqBSracK30GbZg_4lbfu63T7U`);
console.log(headers)
fetch("http://localhost:8080/dragon/all", {
   mode: 'no-cors',
   method: 'GET',
   headers: headers
}).then(json => console.log(json))
   .catch(error => console.log(error));


axios.create({
   baseURL:'',
   headers:{
       'Content-Type':'application/json',
       'Access-Control-Allow-Origin':'http://localhost:3000',
       'Authorization':`${localStorage.getItem('token')}`,
       'Accept': "application/json",
       'Access-Control-Allow-Credentials': 'true'
   }
}).get("http://localhost:8080/dragon/all")
   .then(res => {
       console.log(res)
   }).catch((err)=>{
       console.log(err.response)
})
*/