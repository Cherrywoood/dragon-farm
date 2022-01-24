import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext, UserContext} from "../App";
import ButtonCust from "../UI/button/ButtonCust";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logOutHandler = () => {
        localStorage.clear()
        setIsAuth(false)
    }
    return (
        <nav>
            <div>
                <span>
                <Link to="" className="nav-link">My dragons</Link>
            </span>
                {localStorage.getItem('role') === 'USER' ?
                    <span className="nav-item">
                    <Link to="" className="nav-link">Rent a dragon</Link>
                </span> : ""
                }
            </div>
            <Link className="nav-link" to="/auth" onClick={logOutHandler}>Log Out</Link>
        </nav>
    );
};

export default Navbar;