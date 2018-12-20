import React, { Component } from 'react'
// import '../../style/login-component.css';

class LoginComponent extends Component {
    render() {  
        return (
            <div className="fluid-container">
            <div className="card loginCard">
            <div className="card-header LoginHeader"><span className="loginSpan">LOG IN</span>
            </div>
            <div className="card-body loginBody"></div>
            <div className="row"><div className="col-sm-3">
            {/* <span>User Name</span> */}User Name
            </div><div className="col-sm-6">
            <input type="text" className="form-control-sm" id="UserName"/>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default LoginComponent;