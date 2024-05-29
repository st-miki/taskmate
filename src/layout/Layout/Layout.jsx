import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './Layout.css';
import LoadingPage from '../../Settings/LoadingPage';

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true); // State to control loading display

  useEffect(() => {
    // Simulate loading time with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading state to false after a delay
    }, 4500); // Adjust the delay as needed

    // Cleanup function to clear the timeout if component unmounts before the delay completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="layout">
          <Sidebar />
          <div className="content">
            <Header />
            <div className="main-content">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
