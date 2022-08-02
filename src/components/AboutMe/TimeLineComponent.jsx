import data from '../../data/experience_education.json'
import CardTimeLine from './CardTimeLine'

export default function TimeLineComponent () {
  return (
  //    <section className="flex flex-row sm:justify-between items-center mt-12 sm:gap-10">
    <div className='flex flex-wrap items-start md:-mr-6 mt-14'>
      <section className='md:mt-4 w-full lg:w-1/2 lg:pr-8 flex flex-wrap justify-center'>
        <div className='mb-8'>
          <h3 className='text-3xl text-center font-semibold text-ternary-dark dark:text-primary-light uppercase'>Experience</h3>
        </div>
        {
        data.data.experience.map((experience, i) => (
          <CardTimeLine data={experience} key={i} />
        )).reverse()

        }
      </section>

      <section className='md:mt-4 w-full lg:w-1/2 lg:pr-8 flex flex-wrap justify-center'>
        <div className='mb-8'>
          <h3 className='text-3xl text-center font-semibold text-ternary-dark dark:text-primary-light uppercase'>Education & Certifications</h3>
        </div>
        {
            data.data.education.map((education, i) => (
              <CardTimeLine data={education} key={i} />
            )).reverse()
        }

      </section>

    </div>

  //    </section>
  )
}
