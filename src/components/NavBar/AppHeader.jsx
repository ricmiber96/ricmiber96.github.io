import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import { setTheme } from '../../utils/themes';
import Logo from "./Logo";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";



let theme = localStorage.getItem('theme')

export default function AppHeader(){

    const [isOpen, setOpen] = useState(false)
    // const [themeIcon, setThemeIcon] = useState("light")

    // useEffect(() => {
    //     localStorage.setItem('theme', 'light');
    // }, [theme])

    const handleOpen = () => {
        setOpen(!isOpen)
    }
    
    return(
        // <NavBar/>
        <nav id="nav" className="sm:container sm:mx-auto">
            <div className="z-10  max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                   
                   <NavBarMobile  isOpen={isOpen} handleOpen={handleOpen}/>
                   {/* <div className="flex justify-between items-center px-6 px-0 m-4"> 
                        <div>
                            <Link to="/">
                                <Logo theme={themeIcon}/>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2 lg:hidden">
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
                   </div> */}
                        <AppNavigation className="sm:hidden" isOpen={isOpen}/>  

    {/* //                 <button onClick={()=>themeSwitcher()} className="sm:ml-8 m-4 bg-primary-light dark:bg-ternary-dark px-2 py-2 shadow-sm rounded-lg cursor-pointer">
    //                         <IconTheme theme={theme}/>
    //                 </button> */}
                   
{/* 
                   <div className="sm:hidden">
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
                   </div>  */}
                     
            </div>
        </nav>
    )
}