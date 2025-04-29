import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  if (token) {
    // Déjà connecté, on redirige vers /user
    return <Navigate to="/user" replace />;
  }

  // Pas connecté, on autorise l'accès
  return children;
}

export default PublicRoute;
