import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';

const Login = ({ onLogin }) => {
 const [email, setEmail] = useState('');
 const [password, setpassword] = useState('');
 const [error, setError] = useState('');
 const Navigate = useNavigate();

 const loginAction = () =>{
    const hardcodedemail = 'test@example.com';
    const hardcodedpwd = 'password@24';

    if(email === hardcodedemail && password === hardcodedpwd){
        onLogin(email);
        Navigate("/welcome");
    }
    else{
        setError("Username or Password is incorrect");
    }
 };

 return(
 <div class = "loginpg">
    <div class = "container">
        
    <h2>Sign in With</h2>
    <button class = "fb" onClick={() => window.location.href = 'https://facebook.com'}><FontAwesomeIcon icon = {faFacebook}/>&nbsp;Facebook</button>&nbsp;&nbsp;
    <button class = "g" onClick={() => window.location.href = 'https://google.com/'}><FontAwesomeIcon icon = {faGoogle}/>&nbsp;Google</button>
    
    <label id ="l">Username</label>
    <input type = "email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    <label id ="p">Password <a href = '/'>Forgot?</a></label>
    <input type = "password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
    {error && <div style = {{color: 'red'}}>{error}</div>}
    <button class ="sign" onClick={loginAction}><h5>Sign In</h5></button>
    <h6>Not a member? <a href='/' >Signup now</a></h6>
 </div>
</div>
 );
}
export default Login;