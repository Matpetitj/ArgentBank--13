import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./Redux/slices/authSlice";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home/home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import User from "./pages/User/User.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import ProtectedRoute from "./components/protectedRoute/protectedRoute.jsx"
import PublicRoute from "./components/publicRoute/publicRoute.jsx"

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const storedToken =
      localStorage.getItem("userToken") || 
      sessionStorage.getItem("userToken");

    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);

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
        <Route path="/login" element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        }/>

        {/* Route protégée pour le dashboard */}
        <Route path="/user" element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
