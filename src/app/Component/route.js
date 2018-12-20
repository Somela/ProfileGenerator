import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginComponent from './login-component';


class Routes extends Component {
    render() {
        return (
            <div>
            <Route exact path="/" component={LoginComponent}/>
            </div>
        )
    }
}

export default Routes