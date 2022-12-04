import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom';

// Utils
import auth from '../../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.getToken() !== null ? (
            <Component {...props} />
        ) : (
            <redirect to={{
                pathname: 'auth/login',
                state: { from: props.location }
            }}
            />
        )
    )} />
);

export default PrivateRoute;