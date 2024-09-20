import { Outlet } from 'react-router-dom';

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


export default function Layout() {
    return (
        <div className="layout">
            <div className="layout-background">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};