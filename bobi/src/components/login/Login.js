import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import express from 'axios';

const style = {
    margin: 15
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }

  handleClick(event) {
    var self = this;
    var payload = {
      "email":this.state.username,
      "password":this.state.username
    };
    axios.post("http://localhost:3000/api/login", payload)
    .then(function(response) {
      console.log(response);
      if (response.data.code == 200) {
        console.log("Login successful");
        var uploadScreen = [];
        uploadScreen.push(<UploadScreen appContext={sel.props.appContext}/>);
        self.props.appContext.setState({loginPage:[], uploadScreen:uploadScreen});
      } else if (response.data.code == 204) {
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
              hintText="Enter your username" 
              floatingLabelText="Username" 
              onChange={(event, newValue) => this.setState({username:newValue})}
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