import { Link } from "react-router-dom";
import SwitchTheme from "./SwitchTheme";

export default function AppNavigation({isOpen}){
     let display
     isOpen ? display = 'block' : display = 'hidden'
    return(
        <>
        <div className={`${display} m-0 flex-row sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-end items-center shadow-lg sm:shadow-none sm:w-full`}>
            <Link to="/about" className="block text-left text-lg font-semibold text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
                <h2 className="hover:text-indigo-500 dark:hover:text-indigo-400">About Me</h2>
            </Link>
            <Link to="/projects" className="block text-left text-lg font-semibold text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
                <h2 className="hover:text-indigo-500 dark:hover:text-indigo-400">Projects</h2>
            </Link>
            <Link to="/stack" className="block text-left text-lg font-semibold text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
                <h2 className="hover:text-indigo-500 dark:hover:text-indigo-400">Stack</h2>
            </Link>
            <Link to="/contact" className="block text-left text-lg font-semibold text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
                <h2 className="hover:text-indigo-500 dark:hover:text-indigo-400">Contact</h2>
            </Link>
            {/* <h2 className="block text-left text-lg font-thin text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">EJemplo</h2> */}
            <SwitchTheme/>
        </div> 
     
        </>
    )
}