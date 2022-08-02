import imageMail from '../../assets/icons/email_illustration.svg'
import { IoSend } from 'react-icons/io5'

export default function ContactForm () {
  return (
    <div className='w-full flex flex-col
        sm:justify-between
        sm:flex-row
        mt-12
        md:mt-2'
    >
      <div className='w-full sm:w-full lg:w-2/3'>
        <div className='leading-loose  m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left'>
          <p className='font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8'>Contact Form</p>
          <form className='font-general-regular space-y-7'>
            <div className='mt-6'>
              <label className='block text-lg text-primary-dark dark:text-primary-light mb-2'>Full Name</label>
              <input
                className='w-full
                                px-5
                                py-2
                                border
                                border-gray-300
                                dark:border-primary-dark
                                border-opacity-50
                                text-primary-dark
                                dark:text-primary-light
                                dark:bg-ternary-dark
                                bg-ternary-light
                                dark:text-ternary-dark
                                rounded-md
                                shadow-sm
                                text-md'
                id='name'
                name='name'
                type='text'
                required='true'
                placeholder='Your Name'
              />
            </div>
            <div className='mt-6'>
              <label className='block text-lg text-primary-dark dark:text-primary-light mb-2'>Email</label>
              <input
                className='w-full
                                px-5
                                py-2
                                border
                                border-gray-300
                                dark:border-primary-dark
                                border-opacity-50
                                text-primary-dark
                                dark:text-primary-light
                                dark:bg-ternary-dark
                                bg-ternary-light
                                dark:text-ternary-dark
                                rounded-md
                                shadow-sm
                                text-md'
                id='email'
                name='email'
                type='email'
                required='true'
                placeholder='Your Name'
              />
            </div>
            <div className='mt-6'>
              <label className='block text-lg text-primary-dark dark:text-primary-light mb-2'>Subject</label>
              <input
                className='w-full
                                px-5
                                py-2
                                border
                                border-gray-300
                                dark:border-primary-dark
                                border-opacity-50
                                text-primary-dark
                                dark:text-primary-light
                                dark:bg-ternary-dark
                                bg-ternary-light
                                dark:text-ternary-dark
                                rounded-md
                                shadow-sm
                                text-md'
                id='subject'
                name='subject'
                type='text'
                required='true'
                placeholder='Your Name'
              />
            </div>
            <div className='mt-6'>
              <label className='block text-lg text-primary-dark dark:text-primary-light mb-2'>Message:</label>
              <textarea
                className='w-full
                                px-5
                                py-2
                                border border-gray-300
                                dark:border-primary-dark
                                border-opacity-50
                                text-primary-dark
                                dark:text-primary-light
                                bg-ternary-light
                                dark:bg-ternary-dark
                                rounded-md
                                shadow-sm
                                text-md'
                id='message'
                name='message'
                cols='14'
                rows='6'
                placeholder='Write your message...'
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit' className='px-4
                            py-2
                            flex
                            justify-center
                            items-center
                            w-48
                            mb-6
                            text-xl
                            text-font-normal
                            font-medium
                            border border-indigo-200
                            dark:border-ternary-dark
                            sm:py-3
                            shadow-lg
                            rounded-lg
                            bg-indigo-500
                            focus:ring-1 focus:ring-indigo-900
                            hover:bg-indigo-600
                            text-white
                            hover:text-white'
              ><IoSend className='m-2' />Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='lg:block lg:w-1/3 hidden m-4'>
        <img src={imageMail} />
      </div>
    </div>
  )
}
