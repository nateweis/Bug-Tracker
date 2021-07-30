import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import Login from './Views/Login/login.jsx';
import Sidebar from './Views/sidebar/sidebar.jsx';
import ViewBugPage from './Views/Pages/viewBugs.jsx';



function App(){
  const {auth} = useSelector(state => state)
  return (
    <Router>
      {!auth.LoggedIn? <Login /> : 
        <>
        <Sidebar />
        <ViewBugPage />
        </>
      }
    </Router>
  );
}

export default App;


