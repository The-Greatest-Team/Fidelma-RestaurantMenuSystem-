import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import MenuComponent from './components/MenuComponent';
import NewDishComponent from './components/NewDishComponent';
import IngredientComponent from './components/IngredientComponent';
import DashboardComponent from './components/DashboardComponent';
import ProfileComponent from './components/ProfileComponent';

function App() {
  return (
    <div>
        <Router>
                <div>
                    <Switch> 
                          <Route path="/" exact component ={MenuComponent}></Route>
                          <Route path="/staff/menu/chicken" component={MenuComponent}></Route>
                          <Route path="/staff/NewDish" component={NewDishComponent}></Route>
                          <Route path="/staff/ingredient" component={IngredientComponent}></Route>
                          <Route path="/staff/dashboard" component={DashboardComponent}></Route>
                          <Route path="/staff/profile" component={ProfileComponent}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
