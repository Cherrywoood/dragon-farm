import React, {createContext, useEffect, useState} from 'react'
import Reg from "./compomemts/all/Reg";
import Header from "./compomemts/all/Header";
import './style/App.css'
import 'normalize.css'
import Auth from "./compomemts/all/Auth";
import AppRouter from "./compomemts/AppRouter";
import DragonInfo from "./compomemts/dragons/DragonInfo";
import {BrowserRouter} from "react-router-dom";
import OrderDesk from "./compomemts/OrderDesk";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import MyProgressBar from "./compomemts/all/MyProgressBar";
import DragonCard from "./compomemts/dragons/DragonCard";
import DragonCardList from "./compomemts/dragons/DragonCardList";

export const AuthContext = createContext(null);
export const UserContext = createContext(null);
function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(null)
    const [dragon, setDragon] = useState(
        [{
            id: 1,
            name: 'PETia',
            type: 'Catastrophic Quaken',
            class: 'Boulder',
            rarity: 0.7,
            way_of_taming: 'Groncicles are a peaceful, friendly, non-aggressive species. ' +
                'Having been the first dragons to ever be peaceful with humans (with the ancient Vikings of Icestorm Island), ' +
                'they are naturally kind with people. So, it won`t be difficult to tame this dragon.',
            trainable: true,
            active_time: 'night',
            mating_season: 'AUTUMN',
            hatching_age: 5,
            puberty_age: 15,
            appearance: {
                size: 'GIGANTIC',
                colors: 'Chartreuse;Aquamarine with purple to brown stripes',
                fire_type: 'Ammonium nitrate mixed with anhydrous hydrazine',
                features: 'Wood-like skin;Covered in foliage and trees;' +
                    'Beard-like tendrils;Double nasal horn;Hair-like appendages'
            }
        }, {
            id: 3,
            name: 'IGOR',
            type: 'Catastrophic Quaken',
            class: 'Boulder',
            rarity: 0.7,
            way_of_taming: 'Groncicles are a peaceful, friendly, non-aggressive species. ' +
                'Having been the first dragons to ever be peaceful with humans (with the ancient Vikings of Icestorm Island), ' +
                'they are naturally kind with people. So, it won`t be difficult to tame this dragon.',
            trainable: true,
            active_time: 'night',
            mating_season: 'AUTUMN',
            hatching_age: 5,
            puberty_age: 15,
            appearance: {
                size: 'GIGANTIC',
                colors: 'Chartreuse;Aquamarine with purple to brown stripes',
                fire_type: 'Ammonium nitrate mixed with anhydrous hydrazine',
                features: 'Wood-like skin;Covered in foliage and trees;' +
                    'Beard-like tendrils;Double nasal horn;Hair-like appendages'
            }
        }, {
            id: 3,
            name: 'MINA',
            type: 'Catastrophic Quaken',
            class: 'Boulder',
            rarity: 0.7,
            way_of_taming: 'Groncicles are a peaceful, friendly, non-aggressive species. ' +
                'Having been the first dragons to ever be peaceful with humans (with the ancient Vikings of Icestorm Island), ' +
                'they are naturally kind with people. So, it won`t be difficult to tame this dragon.',
            trainable: true,
            active_time: 'night',
            mating_season: 'AUTUMN',
            hatching_age: 5,
            puberty_age: 15,
            appearance: {
                size: 'GIGANTIC',
                colors: 'Chartreuse;Aquamarine with purple to brown stripes',
                fire_type: 'Ammonium nitrate mixed with anhydrous hydrazine',
                features: 'Wood-like skin;Covered in foliage and trees;' +
                    'Beard-like tendrils;Double nasal horn;Hair-like appendages'
            }
        }
        ])


    useEffect(()=> {
        if(localStorage.getItem('token')) {
            setIsAuth(true)
        }
    })
    return (
       <AuthContext.Provider value={{
           isAuth,
           setIsAuth
       }}>
           <UserContext.Provider value={{
               user,
               setUser
           }}>
               <BrowserRouter>
                   <div className="app">
                       <Header/>
                       <AppRouter dragon={dragon}/>
                   </div>
               </BrowserRouter>
           </UserContext.Provider>
       </AuthContext.Provider>
    );
}

export default App;
