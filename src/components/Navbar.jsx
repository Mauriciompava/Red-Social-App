import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <>
            {/* Navbar */}
            <div className="w3-top">
                <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                    {/* Hamburger Menu - Hidden on medium and large screens */}
                    <button
                        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
                        onClick={toggleNav}
                    >
                        <i className="fa fa-bars"></i>
                    </button>

                    {/* Logo */}
                    <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
                        <i className="fa fa-home w3-margin-right"></i>RedSocial
                    </Link>

                    {/* Navigation Icons - Hidden on small screens */}
                    <Link to="/news" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News">
                        <i className="fa fa-globe"></i>
                    </Link>
                    <Link to="/profile" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings">
                        <i className="fa fa-user"></i>
                    </Link>
                    <Link to="/messages" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages">
                        <i className="fa fa-envelope"></i>
                    </Link>
                    <Link to="/groups" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Groups">
                        <i className="fa fa-users"></i>
                    </Link>
                    <Link to="/settings" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Settings">
                        <i className="fa fa-cog"></i>
                    </Link>

                    {/* Notifications Dropdown */}
                    <div className="w3-dropdown-hover w3-hide-small">
                        <button className="w3-button w3-padding-large" title="Notifications">
                            <i className="fa fa-bell"></i>
                            <span className="w3-badge w3-right w3-small w3-green">3</span>
                        </button>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
                            <Link to="/" className="w3-bar-item w3-button">One new friend request</Link>
                            <Link to="/" className="w3-bar-item w3-button">John Doe posted on your wall</Link>
                            <Link to="/" className="w3-bar-item w3-button">Jane likes your post</Link>
                        </div>
                    </div>

                    {/* User Menu Dropdown */}
                    <div className="w3-dropdown-hover w3-hide-small w3-right">
                        <button className="w3-button w3-padding-large w3-hover-white" title="User Menu">
                            <img
                                src="https://www.w3schools.com/w3images/avatar2.png"
                                className="w3-circle"
                                style={{ height: '23px', width: '23px', marginRight: '8px' }}
                                alt="Avatar"
                            />
                            {user?.nombre || 'Usuario'}
                        </button>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                            <Link to="/profile" className="w3-bar-item w3-button">👤 Mi Perfil</Link>
                            <Link to="/settings" className="w3-bar-item w3-button">⚙️ Configuración</Link>
                            <div className="w3-bar-item w3-border-top" style={{ marginTop: '8px', paddingTop: '8px' }}>
                                <button
                                    onClick={handleLogout}
                                    className="w3-button w3-block w3-red w3-hover-dark-red"
                                    style={{ fontSize: '13px', padding: '8px 16px' }}
                                >
                                    🚪 Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {navOpen && (
                <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-large" style={{ paddingTop: '46px' }}>
                    <Link to="/" className="w3-bar-item w3-button w3-padding-large" onClick={() => setNavOpen(false)}>Home</Link>
                    <Link to="/news" className="w3-bar-item w3-button w3-padding-large" onClick={() => setNavOpen(false)}>News</Link>
                    <Link to="/messages" className="w3-bar-item w3-button w3-padding-large" onClick={() => setNavOpen(false)}>Messages</Link>
                    <Link to="/groups" className="w3-bar-item w3-button w3-padding-large" onClick={() => setNavOpen(false)}>Groups</Link>
                    <Link to="/settings" className="w3-bar-item w3-button w3-padding-large" onClick={() => setNavOpen(false)}>Settings</Link>
                    <Link to="/profile" className="w3-bar-item w3-button w3-padding-large" onClick={() => setNavOpen(false)}>My Profile</Link>
                    <button
                        onClick={() => {
                            handleLogout();
                            setNavOpen(false);
                        }}
                        className="w3-bar-item w3-button w3-padding-large w3-border-top"
                        style={{ color: '#ff4444' }}
                    >
                        🚪 Logout
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;
