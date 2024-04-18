import React from "react";
import {BrowserRouter, Navigate,Route, Routes} from 'react-router-dom';
import ProtectedRoute from './features/auth/ProtectedRoute.tsx';
import AppLayout from './layout/AppLayout.tsx';
import Review from './pages/Review.tsx';
import CSV from './pages/CSV.tsx';
import Activities from './pages/Activities.tsx';
import Status from './pages/Status.tsx';
import Login from './features/auth/Login.tsx';
import PageNav from "./layout/PageNav.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import {ActivityProvider} from "./context/ActivityContext.tsx";
import {ToastProvider} from "./context/ToastContext.tsx";

const student = {
    email: 'jorg@mail.com',
    password: '123456',
    role: 'student',
};

const admin = {
    email: 'thomas@mail.com',
    password: '123456',
    role: 'admin',
};

function App() {
    return (
        <AuthProvider>
            <ActivityProvider>
                <ToastProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout/>}>
                                <Route index element={<Login/>}/>
                                <Route path="admin" element={<ProtectedRoute redirect="/" role="admin" element={<PageNav/>}/>}>
                                    <Route index element={<Navigate replace to="review"/>}/>
                                    <Route path="review" element={<Review/>}/>
                                    <Route path="csv" element={<CSV/>}/>
                                </Route>
                                <Route path="student" element={<ProtectedRoute redirect="/" role="student" element={<PageNav/>}/>}>
                                    <Route index element={<Navigate replace to="activities"/>}/>
                                    <Route path="activities" element={<Activities/>}/>
                                    <Route path="status" element={<Status/>}/>
                                </Route>
                            </Route>
                            <Route path="*" element={<PageNotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </ToastProvider>
            </ActivityProvider>
        </AuthProvider>
    );
}

export default App;
