import React from 'react'
import { Navigate } from 'react-router-dom';
//import { useAuth } from './auth';

const RequireAuth = ({childern}) => {
    console.log('Inside Login');
    //const auth = useAuth();

 
    /* if(!auth.user){
        return <Navigate to='/login' />
    } */
    return childern;

}

export default RequireAuth;