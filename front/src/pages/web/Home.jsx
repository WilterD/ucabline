import React from 'react';

import Header from '../../components/web/Header';

function Home() {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <div className="container mx-auto">
        landding

        </div>

      </main>


    </div>
  );
}

export default Home;