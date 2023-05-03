import React from 'react';
import { Route } from 'react-router-dom';

const RouteGuard = ({ component: Component, ...rest }) => {

    function hasJWT() {
        let flag = false;

        //check user has JWT token
        localStorage.getItem("token") ? flag=true : flag=false
        
        return flag
    }

    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }
      
    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return <UserGreeting />;
        }
        return <GuestGreeting />;
      }

    return (
        <Route {...rest}
            render={props => (
                hasJWT() ?
                    <Component {...props} />
                    :
                    this.props.history.push('/signin')
            )}
        />
    );
};

export default RouteGuard;