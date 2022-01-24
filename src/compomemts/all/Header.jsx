import React, {useContext} from 'react';
import '../../style/Header.css'
import ButtonCust from "../../UI/button/ButtonCust";
import {Link} from "react-router-dom";
import Navbar from "../Navbar";
import {AuthContext} from "../../App";
const Header = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <header>
            <span className="title"> <h1>DRAGON FARM</h1> </span>
            {isAuth?<Navbar/>:""}
        </header>
    );
};

export default Header;