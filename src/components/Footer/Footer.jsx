import { useEffect, useState } from 'react'

// ICONS
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaDev } from 'react-icons/fa'

export default function Footer () {
  const [year, setYear] = useState(2021)

  const getActualYear = () => {
    const date = new Date().getFullYear()
    setYear(date)
  }

  useEffect(() => {
    getActualYear()
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='pt-6 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark'>
        <div className='flex flex-col justify-center items-center mb-8 sm:mb-8'>
          <span className='text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-8'>
            Follow me
          </span>
          <ul className='flex flex-col gap-4 md:flex-row'>
            <div className='flex flex-row gap-4'>
              <a href='https://www.linkedin.com/in/ricardomirallesbernal/' target='_blank' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4' rel='noreferrer'>
                <BsLinkedin size='3em' />
              </a>
              <a href='https://github.com/ricmiber96' target='_blank' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4' rel='noreferrer'>
                <AiOutlineGithub size='3em' />
              </a>
            </div>
            <div className='flex flex-row gap-4'>
              <a href='mailto:ricmiber@gmail.com' target='_blank' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4' rel='noreferrer'>
                <MdEmail size='3em' />
              </a>
              <a href='https://dev.to/ricmiber96' target='_blank' className='text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4' rel='noreferrer'>
                <FaDev size='3em' />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className='flex justify-center items-center text-center pb-8'>
        <span className='dark:text-primary-light'>
          &copy; {year}. Made with ❤
          <span className='rounded-lg p-2 ml-2 bg-ternary-light dark:bg-ternary-dark text-center items-center'>
            <a className='hover:text-indigo-500 dark:hover:text-indigo-400' href='https://github.com/ricmiber96'> ricmiber96</a>
          </span>
        </span>
      </div>
    </div>
  )
}
