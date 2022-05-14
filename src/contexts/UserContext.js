import { createContext, useState } from "react"



export const userContext = createContext();

export function UserStorage({ children }) {
    // const [data, setData] = useState(null)
    // const [login, setLogin] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    // async function userLogin(username, password) {
    //     const {}
    // }


    return (
        <userContext.Provider value={{user: "João"}}>
        {children}
        </userContext.Provider>
    )
}