import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
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
                        <i className="fa fa-home w3-margin-right"></i>Logo
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

                    {/* User Avatar */}
                    <Link to="/profile" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
                        <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
                    </Link>
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
                </div>
            )}
        </>
    );
};

export default Navbar;
