import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import AllSchedule from './components/Schedule/AllSchedule';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctores' element={<Doctors />}/>
        <Route path='/schedule' element={<AllSchedule />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
