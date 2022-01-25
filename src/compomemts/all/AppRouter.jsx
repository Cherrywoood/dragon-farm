import React, {useContext} from 'react';
import { Route, Routes} from "react-router-dom";
import Auth from "./Auth";
import Reg from "./Reg";
import DragonInfo from "../dragons/DragonInfo";
import DragonCardList from "../dragons/DragonCardList";
import {AuthContext} from "../../App";
import Dragon from "../dragons/Dragon";
import TransferForm from "../transfer/TransferForm";
import DragonTransferList from "../transfer/DragonTransferList";


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    return (
        isAuth ?
            <Routes>
                <Route exact path="/list" element={<DragonCardList/>}/>
                <Route exact path="/info/:id" element={<DragonInfo/>}/>
                <Route path="/dragon/:id" element={<Dragon/>}/>
                <Route path="/transfer" element={<TransferForm/>}/>
                <Route path="/transfer/list" element={<DragonTransferList/>}/>
                <Route path="*" element={<DragonCardList/>}/>
            </Routes>
            :
        <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="*" element={<Auth/>}/>
        </Routes>


    );
};

export default AppRouter;