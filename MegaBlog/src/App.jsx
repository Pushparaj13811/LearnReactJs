import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { } from "./store/authSlice"
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        }
        else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false))
  }, [])



  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
    </>
  )
}

export default App
