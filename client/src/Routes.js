import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Create from './Create';
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';
import Login from './Login';
import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <PrivateRoute path="/create" exact component={Create} />
                <Route path="/login" exact component={Login} />
                <Route path="/post/:slug" exact component={SinglePost} />
                <PrivateRoute path="/post/update/:slug" exact component={UpdatePost} />
                <Route path='/notfound' component={NotFound}/>
                <Redirect to="/notfound" />
            </Switch>
        </Router>
    );
};

export default Routes;
