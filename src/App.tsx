import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import AllSchedule from './components/Schedule/AllSchedule';
import EachSchedule from './components/Schedule/EachSchedule';
import EachDoctor from './components/EachDoctor/EachDoctor';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctores' element={<Doctors />}/>
        <Route path='/schedule' element={<AllSchedule />}/>
        <Route path='/each-schedule' element={<EachSchedule />}/>
        <Route path='/doctor-profile' element={<EachDoctor />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
