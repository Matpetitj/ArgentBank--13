import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "./Redux/slices/authSlice"; // Ajouté setUser
import { getUserProfile } from "./services/APIService"; // Import de l'API

import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home/home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import User from "./pages/User/User.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import ProtectedRoute from "./components/protectedRoute/protectedRoute.jsx";
import PublicRoute from "./components/publicRoute/publicRoute.jsx";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  // Récupération du token et du profil
  useEffect(() => {
    const storedToken =
      localStorage.getItem("userToken") ||
      sessionStorage.getItem("userToken");

    if (storedToken) {
      dispatch(setToken(storedToken));

      //  Charger le profil de l'utilisateur
      getUserProfile(storedToken)
        .then((userData) => {
          dispatch(setUser(userData)); // { firstName, lastName, etc. }
        })
        .catch((error) => {
          console.error("Erreur lors du chargement du profil :", error);
        });
    }
  }, [dispatch]);

  // Redirection si token change
  useEffect(() => {
    if (token) {
      navigate("/user");
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Route publique pour le login */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />

        {/* Route protégée pour le dashboard */}
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
