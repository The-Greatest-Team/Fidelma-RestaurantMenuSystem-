import React, { useState} from "react";
import Menu from "./pages/menu"
import {Route, Routes ,BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import UserComponent from "./components/UserComponent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/api/users" element={<UserComponent />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
        // <Menu />
    );
}

export default App;
