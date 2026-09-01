import { RouterProvider } from "react-router";
import { useContext } from "react";
import { router } from "./app.routes.jsx";
import {
  AuthContext,
  AuthProvider,
} from "./Features/Authentication/auth.context.jsx";
import LoadingScreen from "./Features/Loading/LoadingScreen";

function AppContent() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <LoadingScreen
        title="Preparing your workspace"
        message="Checking your session and getting the app ready for you..."
      />
    );
  }

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
