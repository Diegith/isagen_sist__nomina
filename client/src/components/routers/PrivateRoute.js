import React from "react";
import {  Navigate, Outlet } from "react-router-dom";
import UseAuth from "../auth/UseAuth";

export const PrivateRoute = ({hasRole: role, ...props}) => {   
    
    const { user } = UseAuth();
    
    if(role && user?.role !== role){
        return  <Navigate to="/login" {...props}/>;
    }

    
    return user ? <Outlet /> : <Navigate to="/login" {...props}/>;
}
