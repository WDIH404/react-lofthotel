import React from 'react';
import { Route, Routes } from 'react-router-dom';

import global from './global.module.scss';

import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import Gallery from './Pages/Gallery/Gallery';
import Booking from './Pages/Booking/Booking';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className={global.container}>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
