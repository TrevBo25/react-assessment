import React from "react";
import { Switch, Route } from "react-router-dom";
import List from './components/List/List'

export default (
    <Switch>
        <Route exact path="/" component={List} />
    </Switch>
)