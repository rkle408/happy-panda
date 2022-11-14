import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="hero-head">
      <div className="navbar" style={{backgroundColor:"#fff12f"}}>
        <Link to="/" className="navbar-item" style={{ fontSize: '2rem' }}>
          <img src= {require('../../pages/pandas/happy.PNG')} style={{marginRight:"10px"}}/>
          <h1 className='logo'> HAPPY PANDA </h1>
        </Link>
        <div className="navbar-item navbar-end">
          {Auth.loggedIn() ? (
            <>
              
                <button className="button navbar-item navbar-end is-light is-mobile" style={{backgroundColor:"#76f904", border:"none", justifyContent:"center", margin:"3px", width:"100px"}}>
                <Link  style={{color:"white"}} to="/note">
                  Notes
                  </Link>
                </button>
              
              <button  style={{backgroundColor:"#f90404", border:"none", justifyContent:"center", margin:"3px", width:"100px"}} className="button navbar-item navbar-end is-mobile" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="navbar-item navbar-end is-light is-mobile" to="/login">
              <button  style={{backgroundColor:"#f90404", border:"none"}} className="button navbar-item navbar-end">
                  login
                </button>
              </Link>
              <Link className="navbar-item navbar-end is-light" to="/signup">
              <button  style={{backgroundColor:"#76f904", border:"none", justifyContent:"center"}} className="button navbar-item navbar-end is-mobile" onClick={logout}>
                signup
              </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
