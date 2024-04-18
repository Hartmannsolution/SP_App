import React from 'react';
import {Outlet} from 'react-router-dom';
import Toast from "./Toast.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

function AppLayout() {
    return (
        <div className="overflow">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Toast/>
            <Footer/>
        </div>
    );
}

export default AppLayout;
