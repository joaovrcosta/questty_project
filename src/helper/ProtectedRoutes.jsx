import { useContextAuth } from "../providers/AuthContext/index";
import { Navigate } from 'react-router-dom'

const ProtectRoutes = ({children}) => {
    const { logged } = useContextAuth()

    return logged ? children : <Navigate to="/login"/>
}

export default ProtectRoutes;