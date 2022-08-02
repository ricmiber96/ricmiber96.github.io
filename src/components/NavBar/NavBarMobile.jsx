import {react, useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import { ThemeContext } from "../../utils/ThemeProvider";



export default function NavBarMobile({isOpen, handleOpen}){

    const theme = useContext(ThemeContext)
    const darkTheme = theme.state.darkTheme

    return(

        <div className="flex justify-between items-center px-6 px-0 m-4"> 
        <div>
            <Link to="/">
                <Logo theme={darkTheme}/>
            </Link>
        </div>
        <div className="flex justify-end space-x-2 sm:hidden">
        <button className="focus:outline-none bg-primary-light dark:bg-ternary-dark rounded-lg m-4  px-2 py-2 " onClick={()=>handleOpen()}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="
        h-8
        w-8
        fill-current
        text-secondary-dark
        dark:text-ternary-light
        
        "
        >  
        {
                isOpen ? 
            <path
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            clip-rule="evenodd"
            ></path>
            :
            <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
        }
        </svg>
        </button>
        </div>
   </div>
    )
}