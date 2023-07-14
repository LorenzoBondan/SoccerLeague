import { Link, NavLink } from "react-router-dom";
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import logoBrasileirao from 'assets/images/logo-brasileirao.png';

import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { getTokenData, hasAnyRoles, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import history from 'util/history';

import { IoShirtSharp } from 'react-icons/io5';
import { MdStadium } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import './styles.css';

const Navbar = () => {
    
    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if(isAuthenticated()){
          setAuthContextData({
            authenticated: true,
            tokenData: getTokenData()
          })
        }
        else{
          setAuthContextData({
            authenticated: false,
          })
        }
      }, [setAuthContextData]);

      const handleLogoutClick = (event : React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
        
        removeAuthData();
    
        setAuthContextData({
          authenticated: false,
        })
    
        history.replace('/'); 
    }

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <Link to="/" className="nav-logo-text">
                <div className='navbar-brand'>
                    <img src={logoBrasileirao} alt="logo" />
                </div>
                    
                <h4>Soccer League</h4>
            </Link>
            <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#soccerleague-navbar"
                    aria-controls="soccerleague-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id="soccerleague-navbar">
                <ul className='navbar-nav offset-md-8 main-menu'>
                    <li>
                        <NavLink to="/teams" activeClassName='active' exact>
                            <IoShirtSharp style={{marginRight:"4px"}}/>
                            Teams
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stadiums" activeClassName='active'>
                            <MdStadium style={{marginRight:"4px"}}/>
                            Stadiums
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/players" activeClassName='active'>
                            <FaUsers style={{marginRight:"4px"}}/>
                            Players
                        </NavLink>
                    </li>
                    {hasAnyRoles(["ROLE_ADMIN"]) ? (
                        <li>
                            <NavLink to="/admin" activeClassName='active'>
                                <MdOutlineAdminPanelSettings style={{marginRight:"4px"}}/>
                                Admin
                            </NavLink>
                        </li>
                    )
                    : (
                        <div></div>
                    )}
                    </ul>
                </div>
                <div className='nav-login-logout'>
                    { authContextData.authenticated ? (
                        <>
                        <span className='nav-username'>{authContextData.tokenData?.user_name}</span>
                        <Link to="/profile">
                            <button className="btn btn-primary">
                                <CgProfile style={{marginRight:"5px"}}/>
                                MY PROFILE
                            </button>
                        </Link>
                        <a href="#logout" onClick={handleLogoutClick}>LOGOUT</a>
                        </>
                    ) : (
                        <Link to="/admin/auth">LOGIN</Link>
                    )
                    }
                </div>
        </nav>
    );
}

export default Navbar;