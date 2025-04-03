import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import User from "./pages/User/User.jsx";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
