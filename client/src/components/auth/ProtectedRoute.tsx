import React, {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContextType} from '../../types/types.ts';
import {useAuth} from "../../context/AuthContext.tsx";

type ProtectedRouteProps = {
    role: string;
    children: React.ReactNode;
};

function ProtectedRoute({role, children}: ProtectedRouteProps) {
    const {isAuthenticated, user} = useAuth() as AuthContextType;
    const navigate = useNavigate();
    const hasRole = user && user.role === role;


    useEffect(
        function () {
            if (!isAuthenticated || !hasRole) navigate('/');
        },
        [isAuthenticated, navigate, hasRole],
    );

    return isAuthenticated && hasRole ? children : null;
}

export default ProtectedRoute;
