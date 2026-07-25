import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("https://zerodha-backend-fd8s.onrender.com/signup", {
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        password: user.password,
      });

      alert(res.data.message || "Account Created Successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h1>Create Account</h1>
        <p>Join Zerodha Clone and start investing.</p>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            value={user.fullname}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Sign Up
          </button>

        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;