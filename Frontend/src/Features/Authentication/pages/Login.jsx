import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import "../auth.form.scss";
import { useAuth } from "../hooks/useAuth";
import LoadingScreen from "../../Loading/LoadingScreen";

const Login = () => {
  const navigate = useNavigate();
  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  };

  if (loading) {
    return (
      <LoadingScreen
        title="Signing you in"
        message="Preparing your account and landing you to your dashboard..."
      />
    );
  }

  return (
    <main>
        <div className="auth-wrapper">
          <div className="form-container">
            <div>
              <h1>Welcome <span>Back</span></h1>
              <p className="subtitle">
                Sign in to your account to access your personalized interview preparation
              </p>
            </div>

            <form onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="button primary-button">
                Sign In
              </button>
            </form>

            <div className="auth-footer">
              <p>Don't have an account?</p>
              <Link to={"/register"}>Create one now</Link>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Login;
