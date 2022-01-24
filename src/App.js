import React, {createContext, useEffect, useState} from 'react'
import Header from "./compomemts/all/Header";
import './style/App.css'
import 'normalize.css'
import AppRouter from "./compomemts/AppRouter";
import {BrowserRouter} from "react-router-dom";
import "react-sweet-progress/lib/style.css";


export const AuthContext = createContext(null);
export const UserContext = createContext(null);
function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(()=> {
        if(localStorage.getItem('token')) {
            setIsAuth(true)
        }
    })
    return (
       <AuthContext.Provider value={{
           isAuth,
           setIsAuth
       }}>
           <UserContext.Provider value={{
               user,
               setUser
           }}>
               <BrowserRouter>
                   <div className="app">
                       <Header/>
                       <AppRouter/>
                   </div>
               </BrowserRouter>
           </UserContext.Provider>
       </AuthContext.Provider>
    );
}

export default App;
