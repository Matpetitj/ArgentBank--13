import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    // Pas connecté, on redirige vers /login
    return <Navigate to="/login" replace />;
  }

  // Connecté, on autorise l'accès
  return children;
}

export default ProtectedRoute;