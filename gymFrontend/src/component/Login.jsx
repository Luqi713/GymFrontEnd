import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleLogin = () => {
        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields");
            return;
        }
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const navigateToLogin = () => {
        Navigate("/signup");
    };

    return (
        <div className="login-container">
            <center><h1>Login To Fitness First!</h1></center>
            <div className="login-box">
                <h2 className="sign-up-label">Login now</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <button className="register-button" onClick={handleLogin}>
                    Login
                </button>
                <p className="login-link" onClick={navigateToLogin}>
                    Already have an account? Log in
                </p>
            </div>


        </div>
    );
};

export default Login;



/* <div className="box" id="login-form">
                    <h2 className="sign-up-label">Sign Up</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <button className="register-button" onClick={handleLogin}>
                        Login
                    </button>
                    <p className="login-link" onClick={navigateToLogin}>
                        Already have an account? Log in
                    </p>
                </div> */