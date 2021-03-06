import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import App from '../containers/App';
import NavbarApp from '../components/NavbarApp';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Adicionar from '../containers/Adicionar';

const AppRouter = () => {
    return (
        <Router>
            <NavbarApp />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route exact="/Adicionar" component={Adicionar} />
            </Switch>
        </Router>
    )
}

export default AppRouter