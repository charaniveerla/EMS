import React, { Component } from 'react'

class LoginComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                : event.target.value
            }
        )
    }

    loginClicked() {
        
         if(this.state.username==='admin' && this.state.password==='dummy')
         {  
            alert("Logged in successfully!!");
            this.props.history.push(`/employees/${this.state.username}`)
         }
        

    }

    render() {
        return (
            <center>
            <div>
                <div className="container"><br></br>
                <h1>Login</h1><br></br>
                </div>
                <div className="container">
                    
                    <b>User Name: </b><input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br></br><br></br>
                    <b>Password: &nbsp;</b><input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br></br><br></br>
                    
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button><br></br><br></br>
                    <button type="button" class="btn btn-primary btn-lg">Admin Login</button><nbsp>      </nbsp>
                    <button type="button" class="btn btn-secondary btn-lg">Employee Login</button>
                </div>
            </div>
            </center>
        )
    }
}

export default LoginComponent