import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext, RepContext} from "../../App";


const Navbar = () => {
    const {setIsAuth} = useContext(AuthContext)
    const {reputation} = useContext(RepContext)
    const logOutHandler = () => {
        localStorage.clear()
        setIsAuth(false)
    }
    return (
        <nav>
            <div>
                <span>
                <Link to="/list" className="nav-link">My dragons</Link>
            </span>
                {localStorage.getItem('role') === 'user' ?
                    <span className="nav-item">
                    <Link to="/transfer" className="nav-link">Rent a dragon</Link>
                </span> : ""
                }
                {localStorage.getItem('role') === 'user' ?
                    <span>reputation: {reputation}</span> : ""
                }
            </div>
            <Link className="nav-link" to="/auth" onClick={logOutHandler}>Log Out</Link>

        </nav>
    );
};

export default Navbar;