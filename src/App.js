import React, {createContext, useEffect, useState} from 'react'
import Header from "./compomemts/all/Header";
import './style/App.css'
import 'normalize.css'
import AppRouter from "./compomemts/AppRouter";
import {BrowserRouter} from "react-router-dom";
import "react-sweet-progress/lib/style.css";


export const AuthContext = createContext(null);

function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuth(true)
        }
    })
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>

            <BrowserRouter>
                <Header/>
                <div className="app">
                    <AppRouter/>
                </div>
            </BrowserRouter>

        </AuthContext.Provider>
    );
}

export default App;
