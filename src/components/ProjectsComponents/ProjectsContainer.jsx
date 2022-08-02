// ICONS
import data from '../../data/projects_data.json'
import { RiComputerLine } from 'react-icons/ri'
import { AiOutlineGithub } from 'react-icons/ai'

export default function ProjectsContainer ({ size }) {
  return (
    <div className='pt-10 sm:pt-20 md:pt-24 mt-6'>
      <div className='text-center'>
        <p className='text-2xl sm:text-5xl font-semibold mb-10 text-ternary-dark dark:text-ternary-light'>
          Some Projects
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10'>
          {
            data.slice(0, size).map((project, i) => (
              <div key={project.id} className='rounded-xl shadow-lg hover:shadow-lg mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark' aria-label='Single Project'>
                <div>
                  <img className='rounded-xl' src={project.image} />
                </div>
                <div className='text-center px-4 py-6'>
                  <p className='text-2xl text-ternary-dark cursor-pointer dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 font-semibold mb-2'>{project.title}</p>
                </div>
                <div className='flex items-center justify-end space-x-4 p-4'>
                  {project.tecnologies.map((tecnology, i) => (
                    <p className='text-sm pb-1 text-fuchsia-900 dark:text-fuchsia-200' key={i}> #{tecnology} </p>
                  ))}
                  <a href={project.links[0]} className='cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400'>
                    <RiComputerLine size='2.5em' />
                  </a>
                  <a href={project.links[1]} className='cursor-pointer  hover:text-indigo-500 dark:hover:text-indigo-400'>
                    <AiOutlineGithub size='2.5em' />
                  </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
