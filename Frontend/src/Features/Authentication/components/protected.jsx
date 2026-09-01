import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import LoadingScreen from "../../Loading/LoadingScreen";

const Protected = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <LoadingScreen
        title="Verifying access"
        message="Checking your authentication status before opening the interview dashboard..."
      />
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
