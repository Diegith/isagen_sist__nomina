import React from "react";
import {  Navigate, Outlet } from "react-router-dom";
import UseAuth from "../auth/UseAuth";

export const PublicRoute = (props) => {   
    
    const { user } = UseAuth();
    return user ? <Outlet /> : <Navigate to="/login" {...props}/>;
}
