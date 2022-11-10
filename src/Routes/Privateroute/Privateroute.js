import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../../Authprovider/Authprovider';


const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }else{
    return children;
    }
};

export default Privateroute;