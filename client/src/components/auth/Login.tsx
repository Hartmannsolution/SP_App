import React, {useEffect, useState} from 'react';
import Button from '../layout/Button.tsx';
import {
    AuthContextType,
    ToastContextType,
    ToastType,
} from '../../types/types.ts';
import {useNavigate} from 'react-router-dom';
import {useToast} from "../../context/ToastContext.tsx";
import {useAuth} from "../../context/AuthContext.tsx";

function Login() {
    const [email, setEmail] = useState('thomas@example.com');
    const [password, setPassword] = useState('123456');

    const navigate = useNavigate();
    const {setToast} = useToast() as ToastContextType;
    const {login, clearError, error, user, isAuthenticated, verifyToken} = useAuth() as AuthContextType;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password) login(email, password);
    };

    useEffect(() => {

        verifyToken();

        if (isAuthenticated && user.role === 'admin') {
            navigate('/admin', {replace: true});
            setToast('Welcome Admin', ToastType.SUCCESS);
        }

        if (isAuthenticated && user.role === 'student') {
            navigate('/student', {replace: true});
            setToast('Welcome Student', ToastType.SUCCESS);
        }

        if (error) {
            setToast(error, ToastType.ERROR);
            clearError();
        }
    }, [isAuthenticated, navigate, user, error, setToast, clearError]);

    return (
        <main className="flex h-[30rem] items-center justify-center md:h-[40rem]">
            <form
                className=" w-[350px] px-8 pb-8 pt-6 md:w-[600px] md:px-16 md:pb-16 md:pt-12 bg-white shadow-lg rounded-lg"
                onSubmit={handleSubmit}
            >
                <h1 className="py-4 text-center text-2xl font-bold md:text-4xl">
                    Account <span className="text-blue-800">Login</span>
                </h1>
                <div className="mb-4">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700 md:text-lg"
                        htmlFor="email"
                    >
                        Email address
                    </label>
                    <input
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="mb-6">
                    <label
                        className="mb-2 block text-sm font-bold text-gray-700 md:text-lg"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none  "
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className="flex items-center justify-center md:text-xl">
                    <Button type="submit" text="Login"/>
                </div>
            </form>
        </main>
    );
}

export default Login;
