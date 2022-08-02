import {BsFillArrowUpSquareFill} from "react-icons/bs";


export default function BackToTopButton(props){

    return (
            <>
            <div className={`${props.showButton} button-back`} onClick={props.handleScrollTop}>
                <button className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-2xl p-2">
                    <BsFillArrowUpSquareFill size={30}/>
                </button>
            </div>
            </>
        )

}
