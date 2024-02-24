import { FaReact } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='relative mx-auto text-text w-[95%] h-16 rounded-full bg-gray-500/30 dark:bg-black/30  mt-2  '>
      <div className='flex  items-center justify-between px-4 py-2 sm:px-6 lg:px-8'>
        <div className='inline-flex items-center space-x-2'>
          <span>
            <FaReact className="text-3xl" />
          </span>
          <Link to='/' >
            <span className='text-xl  text-center py-4 md:text-2xl font-extrabold bg-clip-text  text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-gradient'>
              React Projects
            </span>
          </Link>
        </div>
        <div className='hidden lg:block'>
          <ul className='inline-flex  space-x-8 text-text'>
            <li>
              <Link to='/project' className='text-sm font-semibold  hover:underline hover:underline-offset-2 '>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/about' className='text-sm font-semibold hover:underline hover:underline-offset-2 '>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-sm font-semibold hover:underline hover:underline-offset-2 '>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <button
            type='button'
            className='rounded-md bg-primary px-3 py-2 text-sm font-semibold text-text shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
            // enable dark modeusing tailwindcss
            onClick={() => {
              document.documentElement.classList.toggle('dark')

            }}
          >
            L/D
          </button>
        </div>
        <div className='lg:hidden'>
          {/* onclick to show menu items */}
          <button
            type='button'
            className='rounded-md bg-primary p-2 text-2xl font-semibold text-text shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
            onClick={() => { }}
          >
            <IoMenu />
          </button>

        </div>
      </div>
    </div>
  )
}
export default Navbar
