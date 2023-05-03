import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const setLogIn = (message) => {
    setisLoggedIn(message);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar />
          {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
          ) : (
          <button onClick={setLogIn}>Login</button>
          )}
          <Routes>
            <Route path='/signin' element={<SignIn setLogIn={setLogIn}/>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={
              <Protected isLoggedIn={isLoggedIn}>
                <Profile />
              </Protected>
              }
            />
            <Route path ='/about' element={<About />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;