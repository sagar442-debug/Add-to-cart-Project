import { Navigate } from "react-router-dom";
import useLocalStorage from "./customHooks/useLocalStorage";

const PrivateRoute = ({children}) =>{
    const {getLocalData} = useLocalStorage();
    const isLoggedIn = getLocalData("isLoggedIn") ;
    return isLoggedIn==="true"? children: <Navigate to='/user'/>
}

export default PrivateRoute;