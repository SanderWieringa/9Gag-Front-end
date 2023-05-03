import React, { useEffect, useState } from 'react';
// import {
//   Routes,
//   Route,
//   } from 'react-router-dom';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GoogleSignIn from './pages/GoogleSignIn';
import RouteGuard from "./components/RouteGuard"
import Protected from './components/Protected';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
    console.log("isLoggedIn", isLoggedIn)
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  const setIsLoggedInFromChild = (loginStatus) => {
    setisLoggedIn(loginStatus);
  };

return (
  <BrowserRouter>
    <div className="app">
      <Routes>
        {/* <Route exact path='/' element={<RouteGuard/>} /> */}
        {/* <Route exact path='/' element={<RouteGuard/>}>
          <Route exact path='/' element={<Home/>}/>
        </Route> */}
        {/* <RouteGuard exact path="/" element={<Home />}/> */}
        
        <Protected isLoggedIn={isLoggedIn}>
          <Route exact path="/" element={<Home />} />
        </Protected>
        <Route exact path="/createPost" element={<CreatePost />} />
        <Route exact path="/signin" element={<SignIn setIsLoggedInFromChild={setIsLoggedInFromChild} />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/googlesignin" element={<GoogleSignIn />}/>
        {/* <Route path='*' element={<Navigate to='/' />} /> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
