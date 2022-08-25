import React, { useState} from "react";
import Menu from "./pages/menu"
import {Route, Routes ,BrowserRouter as Router, BrowserRouter} from "react-router-dom"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
        // <Menu />
    );
}

export default App;
