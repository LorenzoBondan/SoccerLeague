import { NavLink } from 'react-router-dom';
import { hasAnyRoles } from 'util/auth';
import './styles.css';

const LeftNavbar = () => {
    return(
        <nav className='admin-nav-container'>
            <ul className='ul-container'>
                {hasAnyRoles(['ROLE_OPERATOR']) && (
                <>
                <li>
                    <NavLink to="/admin/teams" className='admin-nav-item'>
                        <p>Teams</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/players" className='admin-nav-item'>
                        <p>Players</p>
                    </NavLink>
                </li>
                { hasAnyRoles(['ROLE_ADMIN']) && ( 
                    <li>
                        <NavLink to="/admin/users" className='admin-nav-item'>
                            <p>Users</p>
                        </NavLink>
                    </li>   
                )}
                </>
                )}
            </ul>
        </nav>
    );
}

export default LeftNavbar;