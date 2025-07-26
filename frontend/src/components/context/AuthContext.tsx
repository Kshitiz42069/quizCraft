import React, { createContext, useContext, useState, type ReactNode } from 'react'
import type { User } from '../types/User';

interface AuthContextType {
    authUser: User | null;
    setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuthContext must be used within an AuthContextProvider');
    }
    return context;
};

interface AuthProviderProps{
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthProviderProps>=({children})=>{
    const [authUser, setAuthUser] = useState<User | null>(
        JSON.parse(localStorage.getItem('user') || 'null')
    );

    return (
        <AuthContext.Provider value={{authUser, setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}