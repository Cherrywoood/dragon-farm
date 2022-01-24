import React, {useContext} from 'react';
import { Route, Routes} from "react-router-dom";
import Auth from "./all/Auth";
import Reg from "./all/Reg";
import NotFound from "./all/NotFound";
import DragonInfo from "./dragons/DragonInfo";
import DragonCardList from "./dragons/DragonCardList";
import {AuthContext} from "../App";
import Dragon from "./dragons/Dragon";


const AppRouter = (dragon) => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth ?
            <Routes>
                <Route exact path="/list" element={<DragonCardList/>}/>
                <Route exact path="/info/:id" element={<DragonInfo/>}/>
                <Route path="/dragon" element={<Dragon/>}/>
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