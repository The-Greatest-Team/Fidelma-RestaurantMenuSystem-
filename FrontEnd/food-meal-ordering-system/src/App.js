import React from "react";
import {Route, Routes ,BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import UserComponent from "./components/UserComponent";
import MenuComponent from "./components/MenuComponent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/api/users" element={<UserComponent />} />
                <Route path="/staff/menu/chicken" element={<MenuComponent />} />
            </Routes>
        </BrowserRouter>
        // <Menu />
    );
}

export default App;
