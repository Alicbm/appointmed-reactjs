import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import AllSchedule from './components/Schedule/AllSchedule';
import EachSchedule from './components/Schedule/EachSchedule';
import EachDoctor from './components/EachDoctor/EachDoctor';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';

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
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/appointment' element={<Appointment />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
