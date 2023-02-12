import React from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./login.css";
import { auth } from "../../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const login = (e:any)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (
    <div className="Login-form">
      <div className="login-heading">
        <h2>Saylani Welfare</h2>
        <h4>Online Discount Store</h4>
      </div>
      <form  onSubmit={login}>
        <div>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="Passward"
            placeholder="Password"
            id="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <p>Forgot Password</p>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
