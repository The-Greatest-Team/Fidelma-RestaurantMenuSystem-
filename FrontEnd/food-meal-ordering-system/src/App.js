import React from "react";
import {Route, Routes ,BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import UserComponent from "./components/UserComponent";
import MenuComponent from "./components/MenuComponent";
import IngredientComponent from "./components/IngredientComponent";
import NewDishComponent from "./components/NewDishComponent";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/api/users" element={<UserComponent />} />
                <Route path="/staff/menu/chicken" element={<MenuComponent />} />
                <Route path="/staff/ingredient" element={<IngredientComponent />} />
                <Route path="/staff/menu/NewDish" element={<NewDishComponent/>} />
            </Routes>
        </BrowserRouter>
        // <Menu />
    );
}

export default App;
