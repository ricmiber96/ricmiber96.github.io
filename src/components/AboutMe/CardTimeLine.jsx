import { React } from 'react'
import { BsFillBriefcaseFill } from 'react-icons/bs'
export default function CardTimeLine ({ data }) {
  return (
    <article className='w-full sm:flex mb-10 sm:gap-5'>
      <div className='sm:w-1/4 mb-7 sm:mb-0'>
        {data.image
          ? <img src={data.image} className='rounded-lg w-96' alt='' />
          : <div className='h-1/3 flex justify-center items-center text-center text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-lg bg-ternary-light dark:bg-ternary-dark hover:bg-ternary-light shadow-sm p-4' rel='noreferrer'>
            <BsFillBriefcaseFill size='3em' />
          </div>}
      </div>
      <div className='sm:w-3/4 text-left p-10 bg-ternary-light dark:bg-ternary-dark rounded-lg'>
        <header className='flex flex-col items-start pb-4'>
          <h2 className='dark:text-ternary-light text-bold text-xl pb-2'>{data.title}</h2>

          <a href='http://' target='_blank' className='font-medium text-sm pb-1 w-full dark:text-ternary-light' rel='noreferrer'>{data.company}</a>
          <span className='text-sm pb-1 text-fuchsia-900 dark:text-fuchsia-200'>{data.dates}</span>
          <span className='text-sm w-full text-ternary-dark dark:text-ternary-light text-length'>
            {data.description}
          </span>
        </header>
      </div>
    </article>
  )
}
