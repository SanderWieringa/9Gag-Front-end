import React, { useState, useEffect } from "react";

import Header from '../partials/Header';
import Hot from '../partials/Hot';
import { Navigate } from "react-router-dom";

function Home() {
  //const [authenticated, setauthenticated] = useState(null);
  var authenticated = null;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    var isAuthenticated = false;
    console.log("here1")
    if (loggedInUser != null) {
    console.log("here2")
    isAuthenticated = true;
    authenticated = isAuthenticated;
    console.log("authenticated1", authenticated)
    }
    else{ 
      console.log("loggeninuser is null")
    }

  }, []);

  if (!authenticated) {
    console.log("authenticated2", authenticated)
    console.log("/signin")
    return <Navigate replace to='/signin' />;
  }
  else {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="grow">

          {/*  Page sections */}
          <Hot />
        </main>
      </div>
    );
  }
}

export default Home;