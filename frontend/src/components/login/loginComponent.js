import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const style = {
  margin: 15
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  handleClick(event) {
    var payload = {
      "email":this.state.email,
      "password":this.state.password
    };
    axios.post("http://localhost:3000/api/login", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login successful");
        } else if (response.data.code === 204) {
          console.log("Username password do not match");
          alert("Username password do not match");
        } else {
          console.log("Username does not exist");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login"/>
            <TextField 
              hintText="Enter your email" 
              floatingLabelText="Email" 
              onChange={(event, newValue) => this.setState({email:newValue})}
            />
            <br/>
            <TextField
              hintText="Enter your password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({password:newValue})}
            />
            <br/>
            <RaisedButton label="Submit" primary={true} style={style} 
              onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Login;
