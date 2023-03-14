import React from 'react';

import Header from '../partials/Header';
import Hot from '../partials/Hot';

function Home() {
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

export default Home;