import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://zerodha-backend-fd8s.onrender.com/login", user);

      alert(res.data.message);

     // localStorage.setItem("user", JSON.stringify(res.data.user));

     // window.location.href = "https://zerodha-backend-fd8s.onrender.com";
     window.location.href = "https://zerodha-clone-latx-3uh140ebi-dolly-kushwaha.vercel.app/";
   // window.location.href =
 // "https://zerodha-clone-git-main-dolly-kushwaha.vercel.app";
    
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;