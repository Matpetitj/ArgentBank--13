import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';

import Home from "./pages/Home/home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import User from "./pages/User/User.jsx";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx"

//redux fetch base query

function App() {
  return (
    <>
      <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/user" element={<User/>}/>
          </Routes>
          <Footer />
      </Provider>
    </>
  )
}

export default App
