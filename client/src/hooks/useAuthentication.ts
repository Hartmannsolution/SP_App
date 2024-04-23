import {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {AuthContextType, ToastContextType, ToastMsgTypes} from "../types/types.ts";
import {useToast} from "../context/ToastContext.tsx";
import {useAuth} from "../context/AuthContext.tsx";


export function useAuthentication() {

    const {setToast} = useToast() as ToastContextType;
    const {user, isAuthenticated, verifyToken} = useAuth() as AuthContextType;
    const navigate = useNavigate()

    useEffect(() => {

        verifyToken();

        if (isAuthenticated && user.role === 'admin') {
            navigate('/admin', {replace: true});
            setToast('Welcome Admin', ToastMsgTypes.SUCCESS);
        }

        if (isAuthenticated && user.role === 'student') {
            navigate('/student', {replace: true});
            setToast('Welcome Student', ToastMsgTypes.SUCCESS);
        }

    }, [isAuthenticated, navigate, user]);
}
