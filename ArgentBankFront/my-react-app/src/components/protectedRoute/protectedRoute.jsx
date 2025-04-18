import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLogged = useSelector((state) => state.auth.isLogged);

  // Si l'utilisateur n'est pas connecté, on le redirige vers /login
  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  // Sinon on affiche la page demandée
  return children;
}

export default ProtectedRoute;