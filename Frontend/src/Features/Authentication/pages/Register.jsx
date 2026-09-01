import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import "../auth.form.scss";


const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <div className="auth-wrapper">
          <div className="form-container">
            <h1>Loading...</h1>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="auth-wrapper">
        <div className="form-container">
          <div>
            <h1>Get <span>Started</span></h1>
            <p className="subtitle">
              Create your account and begin your journey to ace every interview with AI-powered preparation
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                id="username"
                name="username"
                placeholder="Choose your username"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                name="password"
                placeholder="Create a strong password"
                required
              />
            </div>
            <button type="submit" className="button primary-button">
              Create Account
            </button>
          </form>

          <div className="auth-footer">
            <p>Already have an account?</p>
            <Link to={"/login"}>Sign in instead</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
