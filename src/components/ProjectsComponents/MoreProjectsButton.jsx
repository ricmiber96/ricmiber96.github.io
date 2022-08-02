import { Link } from 'react-router-dom'

export default function MoreProjectsButton () {
  return (
    <div className='mt-5 sm:mt-14 flex justify-center'>
      <a href='/projects'>
        <button className='
                flex
                items-center
                px-10 py-4
                rounded-lg
                shadow-lg
                hover:shadow-xl
                 bg-indigo-500
                 hover:bg-indigo-600
                focus:ring-1
                focus:ring-indigo-900
                text-white
                text-lg
                sm:text-font-normal
                sm:font-medium'
        >More Projects
        </button>
      </a>
    </div>
  )
}
