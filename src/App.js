import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import About from "./components/About";
import Profile from "./components/Profile";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";

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
            <Route path='/createpost' element={
              <Protected isLoggedIn={isLoggedIn}>
                <CreatePost />
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