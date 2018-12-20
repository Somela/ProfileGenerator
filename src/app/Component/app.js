import React,{Component} from 'react';
import Routes from './route';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            {/* <NavBar></NavBar> */}
                <Router>
                    <Routes />
                </Router>
            </div>
        )
    }
}
export default App;