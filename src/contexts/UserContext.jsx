import { createContext, useContext, useState } from "react";
// import { auth } from '../services/firebase-config'


const UserContext = createContext({
    currentUser: "João",
});


export const useAuth = () => {
    return useContext(UserContext)
}


export function UserStorage({children}) {
    const [currentUser, setCurrentUser] = useState(null);

    const value = {
        currentUser,
    }

    console.log(currentUser)


    return (
        <UserContext.Provider value={value}>
        {children}
        </UserContext.Provider>
    );
}
