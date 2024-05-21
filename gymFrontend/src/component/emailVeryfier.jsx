import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailVeryfier = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const Navigate = useNavigate();

    const handleLogin = () => {
        if (email.trim() === "" || otp.trim() === "") {
            alert("Please fill in all fields");
            return;
        }
        console.log("Email:", email);
        console.log("Password:", otp);
    };

    const navigateToLogin = () => {
        Navigate("/login");
    };

    return (
        <div className="login-container">
            <center><h1>Verify Your Email With OTP!</h1></center>
            <div className="login-box">
                <h2 className="sign-up-label"></h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
                <input
                    type="number"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="input-field"
                />
                <button className="register-button" onClick={handleLogin}>
                    Login
                </button>
                <p className="login-link" onClick={navigateToLogin}>
                    Did not get email? Resend Email
                </p>
            </div>


        </div>
    );
};

export default EmailVeryfier;
