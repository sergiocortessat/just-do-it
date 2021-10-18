import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {dark} from '../Redux/Actions'

export default function LightDarkToggle() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            // let nav = document.querySelector('navbar');
            // nav.classList.add('nav-dark-mode');
        
            // button.classList.add('dark-button');
            // document.querySelector('#button').classList.add('dark-button');
            localStorage.setItem('theme', 'dark')
            dispatch(dark(darkMode));

        } else {
            document.body.classList.remove('dark-mode');
            // let button = document.querySelectorAll('.button').classList.remove('dark-button');
            // document.querySelector('#button').classList.remove('dark-button');
            // document.querySelector('button').classList.remove('dark-button');
            localStorage.setItem('theme', 'light')
            dispatch(dark());
        }
    }
        , [darkMode]);
    
        const toggleDarkMode = () => {
            setDarkMode(!darkMode);
        }

        return [darkMode, toggleDarkMode];
  
}
