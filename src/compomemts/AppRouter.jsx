import React from 'react';
import { Route, Routes} from "react-router-dom";
import Auth from "./all/Auth";
import Reg from "./all/Reg";
import NotFound from "./all/NotFound";
import Dragon from "./Dragon";
import DragonCardList from "./DragonCardList";


const AppRouter = (dragon) => {
    return (
        <Routes>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="/info" element={<Dragon dragon={dragon.dragon}/>}/>
            <Route path="/list" element={<DragonCardList/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>

    );
};

export default AppRouter;