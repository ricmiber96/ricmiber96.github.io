import { BsArrowDownCircle } from 'react-icons/bs'
import imageDeveloperDark from '../../assets/icons/icon_developer_dark.png'

export default function AppBanner () {
  return (
    <section
      className='
        flex flex-col
        sm:justify-between
        items-center
        sm:flex-row
        mt-12
        md:mt-2
        '
    >
      <div className='w-full md:w-1/3 text-left'>
        <h1
          className='
        text-3xl
        md:text-4xl
        xl:text-5xl
        text-center
        sm:text-left
        font-semibold
        text-ternary-dark
        dark:text-primary-light
        uppercase
        '
        >
          Hi, I' m Ricardo Miralles
        </h1>
        <p
          className='
        mt-4
        text-2xl
        md:text-3xl
        xl:text-4xl
        text-center
        sm:text-left
        font-semibold
        leading-none
        text-gray-400
        '
        >
          Full-Stack Developer 💻
        </p>
        <div className='flex justify-center sm:block'>
          <a
            href='/Stoman-Resume.pdf'
            download=''
            className='
        flex
        justify-center
        items-center
        w-36
        sm:w-48
        mt-12
        mb-6
        sm:mb-0
        text-lg
        text-font-normal
        font-medium
        border border-indigo-200
        dark:border-ternary-dark
        py-2.5
        sm:py-3
        shadow-lg
        rounded-lg
        bg-indigo-500
        focus:ring-1 focus:ring-indigo-900
        hover:bg-indigo-600
        text-white
        hover:text-white
        '
            aria-label='Download Resume'
          >
            <BsArrowDownCircle className='ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6' />
            <span className='text-sm sm:text-lg'>Download CV</span>
          </a
        >
        </div>
      </div>
      <div className='w-full md:w-2/3 text-right float-right mt-4 sm:mt-0'>
        {/* <DeveloperIllustrationDark/> */}
        <img src={imageDeveloperDark} />
      </div>
    </section>

  )
}
