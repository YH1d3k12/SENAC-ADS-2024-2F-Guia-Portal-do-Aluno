import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "../pages/Body.jsx";


export default function RootNavigation() {
    return (
        <BrowserRouter basename={"/SENAC-ADS-2024-2F-Guia-Portal-do-Aluno/"}>
            <Routes>
                <Route path="/" element={<Body />} >
                </Route>
            </Routes>
        </BrowserRouter>
    );
}