import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSignUp = () => {
    if (!username || !email || !password || !gender || !address || !mobile) {
      alert('All fields are required');
      return;
    }
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Gender:', gender);
    console.log('Address:', address);
    console.log('Mobile:', mobile);
    Navigate('/emailveryfier');
  };

  const navigateToLogin = () => {
    Navigate('/login');
  };

  return (
    <div className="login-container">
    <center><h1>SignUp To Fitness First!</h1></center>
    <div className="login-box">
        <h2 className="sign-up-label">Register now</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
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
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="input-field">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input-field"
        ></textarea>
        <input
          type="text"
          placeholder="Mobile No"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="input-field"
        />
        <button className="register-button" onClick={handleSignUp}>
            Register
        </button>
        <p className="login-link" onClick={navigateToLogin}>
            Already have an account? Log in
        </p>
    </div>


</div>
    
  );
};

export default SignUp;





















/*<div className="signup-container">
       <div className="right-container">
        <h2 className="sign-up-label">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
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
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="input-field">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input-field"
        ></textarea>
        <input
          type="text"
          placeholder="Mobile No"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="input-field"
        />
        <button className="register-button" onClick={handleSignUp}>Register</button>
        <p className="already-account" onClick={navigateToLogin}>Already have an account? Log in</p>
      </div>
      <div className="left-container">
      <div className="image-container">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>*/
