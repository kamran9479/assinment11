import { useContext } from "react";
import { AuthContext } from "../Auth/authProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <span className="loading ml-96 mx-auto min-h-lvh w-56 loading-spinner "></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;