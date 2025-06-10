import React, { useEffect, useContext, useState, createContext } from "react";
import { setAuthToken } from "../services/api";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('token'));

    useEffect(() => {
        console.log('AuthProvider mounted, isAuthenticated:', isAuthenticated);
        const token = localStorage.getItem('token');
        if (token) setAuthToken(token);
    }, []);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setAuthToken(token);
        setIsAuthenticated(true);
        console.log('User logged in, token set:', token);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setAuthToken(null);
        setIsAuthenticated(false);
        console.log('User logged out, token removed');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


// Custom hook for easy access
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};