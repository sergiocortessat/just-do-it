import React from 'react';
import './NavBar.css';
import userDarkMode from './LighDarkComponent';

const NavBar = () => {
    const [darkMode, toggleDarkMode] = userDarkMode();
    console.log(darkMode);
    return (
        <nav className={darkMode ? 'nav-dark-mode' : ''}>
            <h1>Title</h1>
            <div className="toggle">
            <p>{darkMode? 'Swith to Light' : 'Swtich to Dark'}</p>
            <label class="switch">
                <input type="checkbox" onClick={() => toggleDarkMode()}/>
                <span class ="slider round"></span>
            </label>
            </div>
        </nav>
    )
}

export default NavBar;