import React from "react";
import {Navigate} from 'react-router-dom';
import {AuthContextType} from '../../types/types.ts';
import {useAuth} from "../../context/AuthContext.tsx";


type ProtectedRouteProps = {
    role: string;
    redirect: string;
    element: React.ReactNode;
};

const ProtectedRoute = ({ redirect, element, role}: ProtectedRouteProps) => {
    const {isAuthenticated, user } = useAuth() as AuthContextType;

    if(!user) return <Navigate to="/" />;

    return !isAuthenticated && role !== user!.role ? <Navigate to={redirect} /> : element;
};

export default ProtectedRoute;

