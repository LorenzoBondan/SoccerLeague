import { Link, NavLink } from "react-router-dom";
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import logoBrasileirao from 'assets/images/logo-brasileirao.png';

import { IoShirtSharp } from 'react-icons/io5';
import { MdStadium } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

import './styles.css';

const Navbar = () => {
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
                            <i style={{
                                marginRight:"4px",
                            }}>
                            <IoShirtSharp/>
                            </i>
                            Teams
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/stadiums" activeClassName='active'>
                            <i style={{
                                marginRight:"4px",
                            }}>
                            <MdStadium/>
                            </i>
                            Stadiums
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/players" activeClassName='active'>
                            <i style={{
                                marginRight:"4px",
                            }}>
                            <FaUsers/>
                            </i>
                            Players
                        </NavLink>
                    </li>

                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;