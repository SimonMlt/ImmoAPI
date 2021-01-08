import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "../../views/Home";
import Profil from "../../views/Profil";
import Habitation from "../../views/Habitation";
import Navbar from "../Navbar";
import CGI from "../../views/CGI";

const Index = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/profil" exact component={Profil}/>
                <Route path="/habitations" exact component={Habitation}/>
                <Route path="/cgi" exact component={CGI}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default Index;
