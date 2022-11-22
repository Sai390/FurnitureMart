import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './login.css';
import Header from "./header";
import Footer from "./footer";

function Login(){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

  const navigate=useNavigate();

 const loginData = {
        "username": username,
        "password": password
    }
  const errors = {
    pass: "invalid username/password"
  };

  

  const userLogin = (e) => {
    e.preventDefault();
    authenticateUser(loginData)
}

const setCookie= (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const authenticateUser = (data) => {
    console.log(data);
    axios.post("http://localhost:8080/api/auth/signin", data).then(
        (response) => {
            
            console.log(response);
            if (response.status==200) {
              setCookie("accessToken",response.data.accessToken,1);
              sessionStorage.setItem("username",response.data.username)
                console.log("navigating");
                setIsSubmitted(true);
                alert("Login Successful");
            }
        }, (error) => {
          setErrorMessages({ name: "pass", message: errors.pass });
        }
    );
}

const onInputChangeUsername = event => {
    setUserName(event.target.value)
}

const onInputChangePassword = event => {
    setPassword(event.target.value)
}


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="login-wrapper">
      <form class="form" >
      <h2>Login</h2>
        <div className="input-group">
          <input type="text" name="uname" value={username} onChange={e => onInputChangeUsername(e)} required />
          <label for="loginUser">User Name</label>
        </div>
        <div className="input-group">
          <input type="password" name="pass" value={password} onChange={e => onInputChangePassword(e)} required />
          <label for="loginPassword">Password</label>
          {renderErrorMessage("pass")}
        </div>
          <input type="submit" class="submit-btn" value="Login" onClick={e => userLogin(e)} />
      </form>
    </div>
  );

 
    return(
        <div>
          <Header/>
        {isSubmitted ? navigate("/home") : renderForm}
        <Footer/>
        </div>
    );
}

export default Login;