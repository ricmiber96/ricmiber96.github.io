import programerIcon from '../../assets/icons/icon_programming.svg'
import { SiDocker, SiGit, SiNotion, SiPostman, SiUbuntu, SiVisualstudiocode } from 'react-icons/si'

export default function TecnologiesContainer () {
  return (
    <>

      <section className='flex flex-col sm:justify-between items-center sm:flex-row mt-20'>
        <div className='w-2/4'>
          <div className='sm:w-full flex items-center justify-center text-center mb-8'>
            <h1 className='lg:text-6xl text-4xl font-semibold text-primary-dark dark:text-primary-light mb-8'>
              Tecnologies
            </h1>
          </div>
          <div className='flex flex-col justify-center items-center mb-8 sm:mb-8'>
            <ul className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              <span title='Visual Studio Code' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <SiVisualstudiocode size='6em' />
              </span>
              <span className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <SiPostman size='6em' />
              </span>
              <span className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <SiNotion size='6em' />
              </span>
              <span className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <SiDocker size='6em' />
              </span>
              <span className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <SiGit size='6em' />
              </span>
              <span className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <SiUbuntu size='6em' />
              </span>
            </ul>
          </div>
        </div>
        <div className='w-2/4'>
          <img src={programerIcon} />
        </div>
      </section>
    </>
  )
}
