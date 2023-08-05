import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({childern}) => {
    const [user, setUser] = useState(null);

    console.log('Calling Auth Provider');

    const login = (user) => {
        setUser(user) 
    }

    const logout = () => {
        setUser(null);
    }
    console.log('childern : ', childern);
    return childern ? <AuthContext.Provider value={{user, login, logout}}>{childern}</AuthContext.Provider>: 'RRR'
}


export const useAuth = () =>{
    console.log('Calling useAuth');
    return useContext(AuthContext);
}