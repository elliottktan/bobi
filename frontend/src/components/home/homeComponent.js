import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:''
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Home" />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;

