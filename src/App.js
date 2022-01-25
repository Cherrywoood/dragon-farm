import React, {createContext, useEffect, useState} from 'react'
import Header from "./compomemts/all/Header";
import './style/App.css'
import 'normalize.css'
import AppRouter from "./compomemts/all/AppRouter";
import {BrowserRouter} from "react-router-dom";
import "react-sweet-progress/lib/style.css";


export const AuthContext = createContext(null);
export const RepContext = createContext(null)
function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [reputation, setReputation] = useState(0)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuth(true)
        }
        if(localStorage.getItem('reputation')) {
            setReputation(localStorage.getItem('reputation'))
        }
    })
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <RepContext.Provider value={{
                reputation,
                setReputation
            }}>
                <BrowserRouter>
                    <Header/>
                    <div className="app">
                        <AppRouter/>
                    </div>
                </BrowserRouter>
            </RepContext.Provider>

        </AuthContext.Provider>
    );
}

export default App;
