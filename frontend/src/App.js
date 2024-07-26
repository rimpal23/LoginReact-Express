import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import LoginPage from './components/login';
import WelcomePage from './components/welcome';

function App() {
  const[Authenticated, setAuthenticated] = useState(false);
  const[username, setUsername] = useState('');

  const Login = (email) =>{
    setAuthenticated(true);
    setUsername(email);
  };

  return(
    <Router>
      <Routes>
       <Route exact path="/"
       element= {Authenticated ? <Navigate to="/welcome"/>: <LoginPage onLogin = {Login}/>}
       />
       <Route exact path="/welcome"
       element={Authenticated ? <WelcomePage username = {username}/>: <Navigate to="."/>}
       />
       </Routes>
    </Router>
  );



}

export default App;
