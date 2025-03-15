import { createContext, useState, ReactNode, useEffect, useContext } from "react";
import { userDataType } from "../types/userDataType";
import { userData } from "../lib/dummyData";


interface AuthContextType {
    currentUser: userDataType | null;
    setCurrentUser: (user: userDataType | null) => void; 
}


export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
    children: ReactNode;
}


export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [currentUser, setCurrentUser] = useState<userDataType | null>(
        JSON.parse(localStorage.getItem("user") || "null")
    );

    // TODO: Remove when done using demo data for UI viewing
    // useEffect(() => {
    //     setCurrentUser(userData);
    // }, []);


    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("user", JSON.stringify(currentUser));
        } else {
            localStorage.removeItem("user");
        }
    }, [currentUser]); 
    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};



 export const currentUserProviders = () =>{
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("AuthContext must be used within an AuthContextProvider");
      }

      return authContext;
}