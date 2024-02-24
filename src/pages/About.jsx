import { FaLocationDot } from "react-icons/fa6";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function About() {

  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-[100rem] text-text px-4' id="tophead">
        <div className='flex flex-col space-y-8 pb-10 pt-12 md:pt-24'>
          <div className='max-w-max rounded-full border-2 border-text  p-1 px-3'>
            <p className='text-xs font-semibold leading-normal md:text-sm'>About the company</p>
          </div>
          <p className='text-3xl font-bold text-primary md:text-5xl md:leading-10'>
            Made with love, right here in India
          </p>
          <p className='max-w-4xl text-base text-secondary md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque
            repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        <div className='w-full space-y-4'>
          <iframe
            title="BCE Map"
            width="100%"
            height={500}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Bhagalpur%20College%20of%20Engineering%20(BCE),%20Bhagalpur&t=k&z=16&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          <a href="https://embedgooglemap.net/124/"></a>
        </div>
        <div className='my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around'>
          <div className="flex flex-col w-full ">
            <FaLocationDot className='text-xl' />
            <p className='w-full text-xl font-semibold  text-primary'>Bhagalpur</p>
            <p className='w-full text-base text-gray-700'>Mon-Sat 9am to 5pm.</p>
            <p className='text-sm font-medium'>Sabour BHagalpur, Bihar 813210 IN</p>
          </div>
        </div>
        <hr className='mt-20' />
        <div className='mt-16 flex items-center'>
          <div className='space-y-6 md:w-3/4'>
            <div className='max-w-max rounded-full border  border-text p-1 px-3'>
              <p className='text-xs font-semibold leading-normal  md:text-sm'>Join Us →</p>
            </div>
            <p className='text-3xl font-bold text-primary md:text-4xl'>Meet our team</p>
            <p className='max-w-4xl text-base text-gray-700 md:text-xl'>
              Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers
              you to do your best work.
            </p>
            <div></div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 gap-y-6 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4'>
          <div className='rounded-xl p-4 border-2'>
            <img
              src='https://media.licdn.com/dms/image/D4D03AQHCf7RkkmEsOA/profile-displayphoto-shrink_400_400/0/1704984259885?e=1714003200&v=beta&t=qO2bVYIf2j_6LknMK3JqW3R-L1a2qaxQBPaZhQN3FIU'
              alt='Ansh Roshan'
              className=' w-full rounded-full object-cover '
            />
            <p className='mt-6 w-full px-2 text-xl  font-semibold text-primary'>Ansh Roshan</p>
            <p className='w-full px-2 pb-6 text-sm font-semibold text-gray-500'>Web Devloper</p>
          </div>
        </div>
      </div>
      <hr className='mt-6' />
      <div className='mx-auto max-w-7xl'>
        <Footer />
      </div>
    </div >
  )
}
export default About
