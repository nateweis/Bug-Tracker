import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Login from './Views/Login/login.jsx';



class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }

  

  render(){
    return (
      <>
        <Login />
      </>
    );
  }
}

export default App;


