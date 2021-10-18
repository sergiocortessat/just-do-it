import { useEffect, useState } from 'react';

export default function LightDarkToggle() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            let body = document.querySelector('body');
            console.log(body);
            // let nav = document.querySelector('navbar');
            // nav.classList.add('nav-dark-mode');
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light')
        }
    }
        , [darkMode]);
    
        const toggleDarkMode = () => {
            setDarkMode(!darkMode);
        }

        return [darkMode, toggleDarkMode];
  
}
