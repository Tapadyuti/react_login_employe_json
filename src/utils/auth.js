import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
    const [children, setchildren] = useState(props.children);
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user) 
    }

    const logout = () => {
        setUser(null);
    }

    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}


export const useAuth = () =>{
    return useContext(AuthContext);
}