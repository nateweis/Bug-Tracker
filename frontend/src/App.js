import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Views/Pages/Login/login.jsx';
import Sidebar from './Views/sidebar/sidebar.jsx';
import ViewBugPage from './Views/Pages/viewBugs.jsx';



function App(){
  const {auth} = useSelector(state => state)
  return (
    <Router>
      {!auth.LoggedIn? <Login /> : 
        <>
        <Sidebar />
        
        <Switch>
          <Route path="/viewbugs"><ViewBugPage /></Route>
        </Switch>
        
        </>
      }
    </Router>
  );
}

export default App;


