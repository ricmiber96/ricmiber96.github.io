
export default function AboutComponent () {
  return (
    <div className='block sm:flex sm:gap-10 mt-10 sm:mt-20'>
      <div className='w-full sm:w-1/4 mb-7 sm:mb-0'>
        <img src='https://media-exp2.licdn.com/dms/image/C4D03AQGgSor5-xZ00g/profile-displayphoto-shrink_200_200/0/1607097041235?e=1660780800&v=beta&t=laHFOq6kyFsAWiFJhgMeco7JENNBG1231ef8f2MOcWw' className='rounded-lg w-96' alt='' />
      </div>
      <div className='w-full sm:w-3/4 text-left p-10 bg-ternary-light dark:bg-ternary-dark rounded-lg'>
        <p className='mb-4 text-ternary-dark dark:text-ternary-light text-length'>

          Passionate about swimming 🏊‍♂️, I enjoy training and competing. I chose to study
          computing because since I was little I was curious to know how
          videogames 🕹 worked, that led me to study systems administration
          first, and then application development. And here I am,
          investing in continuous learning and seeking a job opportunity in the
          technology sector.
        </p>
      </div>
    </div>
  )
}
