import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../../views/Home";
import Profil from "../../views/Profil";
import Habitation from "../../views/Habitation";

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profil" exact component={Profil}/>
                <Route path="/habitation" exact component={Habitation}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default Index;
