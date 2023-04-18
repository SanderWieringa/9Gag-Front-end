import React, { useEffect } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GoogleSignIn from './pages/GoogleSignIn';

function App() {


  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/googlesignin" element={<GoogleSignIn />} />
      </Routes>
    </>
  );
}

export default App;
