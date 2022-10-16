import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
//import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './Page/User/User';
import GeneralInfo from './Page/UserDetailsPage/GeneralInfo/GeneralInfo';
import UserDocument from './Page/UserDetailsPage/Document/UserDocument';
import Login from './Page/Login/Login';
import { useState } from 'react';

function App() {
  const getEmail = localStorage.getItem('logindataEmail');
  const getPassword = localStorage.getItem('logindataPassword');
 
  return (
    <>
      {getEmail && getPassword ? (
        <Router>
          <Navbar />
          <div className="container">
            <Sidebar />
            <div className="sub">
              <Routes>
                <Route exact path="/user" element={<User />} />
                <Route
                  path="/user/:id/personal-Info"
                  element={<GeneralInfo />}
                />
                <Route path="/user/:id/document" element={<UserDocument />} />
              </Routes>
            </div>
          </div>
        </Router>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
