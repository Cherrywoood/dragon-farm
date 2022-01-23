import React, {useState} from 'react'
import Reg from "./compomemts/all/Reg";
import Header from "./compomemts/all/Header";
import './style/App.css'
import 'normalize.css'
import Auth from "./compomemts/all/Auth";
import AppRouter from "./compomemts/AppRouter";
import DragonTypeInfo from "./compomemts/DragonTypeInfo";
import {BrowserRouter} from "react-router-dom";
import OrderDesk from "./compomemts/OrderDesk";



function App() {
    const [dragon, setDragon] = useState(
        {
            id: 1,
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
            },
            food: ['Rocks', 'Lava', 'Dragon hatchlings'],
            habitat: ['Grandiose Glacier', 'Resolution Reef', 'Rosy Shores']
        })


    return (
        /* <BrowserRouter>
             <div className="app">
                 <Header/>
                 <AppRouter dragon={dragon}/>
             </div>
         </BrowserRouter>
       */

            <div className="app">
                <Header/>
                <OrderDesk/>
            </div>


    );
}

export default App;
