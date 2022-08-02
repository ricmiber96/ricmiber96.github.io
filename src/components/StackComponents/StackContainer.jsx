
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiExpress } from 'react-icons/si'
import TecnologiesContainer from './TecnologiesContainer'

export default function StackContainer () {
  return (
    <>

      <section className='flex flex-col sm:justify-between items-center sm:flex-row'>
        <div className='w-full'>
          <div className='sm:w-full flex items-center justify-center text-center mt-10 mb-8'>
            <h1 className='lg:text-6xl text-4xl font-semibold text-primary-dark dark:text-primary-light mb-8'>
              Main Stack
            </h1>
          </div>
          <div className='flex flex-col justify-center items-center mb-8 sm:mb-8'>
            <ul className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              <span title='MongoDB' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <SiMongodb size='6em' />
              </span>
              <span title='Express' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <SiExpress size='6em' />
              </span>
              <span title='NodeJS' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <FaNodeJs size='6em' />
              </span>
              <span title='React' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4'>
                <FaReact size='6em' />
              </span>
            </ul>
          </div>
        </div>
      </section>
      <TecnologiesContainer />
    </>
  )
}
