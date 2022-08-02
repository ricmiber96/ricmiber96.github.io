import AboutComponent from '../components/AboutMe/AboutMeComponent'
import TimeLineComponent from '../components/AboutMe/TimeLineComponent'

export default function AboutMe () {
  return (
    <div className='container mx-auto mb-20 max-h-full'>
      <AboutComponent />
      <TimeLineComponent />
    </div>
  )
}
