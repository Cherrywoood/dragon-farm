import React, {useContext} from 'react';
import { Route, Routes} from "react-router-dom";
import Auth from "./all/Auth";
import Reg from "./all/Reg";
import NotFound from "./all/NotFound";
import DragonInfo from "./dragons/DragonInfo";
import DragonCardList from "./dragons/DragonCardList";
import {AuthContext} from "../App";


const AppRouter = (dragon) => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth ?
            <Routes>
                <Route path="/info" element={<DragonInfo dragon={dragon.dragon}/>}/>
                <Route path="/list" element={<DragonCardList/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            :
        <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>


    );
};

export default AppRouter;