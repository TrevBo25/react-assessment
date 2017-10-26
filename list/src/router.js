import React from "react";
import { Switch, Route } from "react-router-dom";
import List from './components/List/List';
import Details from './components/Details/Details'

export default (
    <Switch>
        <Route exact path="/" component={List} />
        <Route path="/details/:id" component={Details} />
    </Switch>
)