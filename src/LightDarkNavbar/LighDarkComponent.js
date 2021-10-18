import { useEffect, useState } from 'react';

export default function LightDarkToggle() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            // let nav = document.querySelector('navbar');
            // nav.classList.add('nav-dark-mode');
            document.querySelector('.button').classList.add('dark-button');
            // document.querySelector('#button').classList.add('dark-button');
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('.button').classList.remove('dark-button');
            // document.querySelector('#button').classList.remove('dark-button');
            // document.querySelector('button').classList.remove('dark-button');
            localStorage.setItem('theme', 'light')
        }
    }
        , [darkMode]);
    
        const toggleDarkMode = () => {
            setDarkMode(!darkMode);
        }

        return [darkMode, toggleDarkMode];
  
}
