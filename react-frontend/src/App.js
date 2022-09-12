import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import MainMenuComponent from './components/MainMenuComponent';
import MenuComponent from './components/MenuComponent';
import NewDishComponent from './components/NewDishComponent';
import EditDishComponent from './components/EditDishComponent';
import IngredientComponent from './components/IngredientComponent';
import DashboardComponent from './components/DashboardComponent';
import ProfileComponent from './components/ProfileComponent';
import EnterComponent from './components/EnterComponent';
import DescriptionComponent from './components/DescriptionComponent';
import ConfirmComponent from './components/ConfirmComponent';
import CustomerMainMenuComponent from './components/CustomerMainMenuComponent';
import CustomerMenuComponent from './components/CustomerMenuComponent';

function App() {
  return (
    <div>
        <Router>
                <div>
                    <Switch> 
                          <Route path="/" exact component ={MenuComponent}></Route>
                          <Route path="/staff/mainMenu" component={MainMenuComponent}></Route>
                          <Route path="/staff/menu/chicken" component={MenuComponent}></Route>
                          <Route path="/customer/mainMenu" component={CustomerMainMenuComponent}></Route>
                          <Route path="/customer/menu/beef" component={CustomerMenuComponent}></Route>
                          <Route path="/customer/menu/chicken" component={CustomerMenuComponent}></Route>
                          <Route path="/staff/menu/beef" component={MenuComponent}></Route>
                          <Route path="/staff/menu/newDish" component={NewDishComponent}></Route>
                          <Route path="/staff/menu/edit/:id" component={EditDishComponent}></Route>
                          <Route path="/staff/ingredient" component={IngredientComponent}></Route>
                          <Route path="/staff/dashboard" component={DashboardComponent}></Route>
                          <Route path="/staff/profile" component={ProfileComponent}></Route>
                          <Route path="/enterPage" component={EnterComponent}></Route>
                          <Route path="/dishDescription" component={DescriptionComponent}></Route>
                          <Route path="/confirmPage" component={ConfirmComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
