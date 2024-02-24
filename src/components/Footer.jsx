import { Link } from "react-router-dom"
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex flex-wrap items-center justify-between max-h-36 text-text'>
      <div className='w-auto p-8'>
        <a href='#'>
          <div className='inline-flex items-center'>
            <FaReact className="text-3xl" />
            <Link to='/' >
              <span className='ml-4 text-xl text-center py-4 md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate-gradient'>
                React Projects
              </span>
            </Link>
          </div>
        </a>
      </div>
      <div className='w-auto p-8'>
        <ul className='-m-5 flex flex-wrap items-center space-x-12'>
          <li>
            <Link to='/project' className=' font-semibold  hover:underline hover:underline-offset-2 '>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/about' className=' font-semibold hover:underline hover:underline-offset-2 '>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' className=' font-semibold hover:underline hover:underline-offset-2 '>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-auto p-8'>
        <div className='-m-1.5 flex flex-wrap'>
          <div className='w-auto p-1.5'>
            <a href='#'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full border  border-gray-300 hover:border-gray-400'>
                <FaGithub />
              </div>
            </a>
          </div>
          <div className='w-auto p-1.5'>
            <a href='#'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full border    border-gray-300 hover:border-gray-400'>
                <FaXTwitter />
              </div>
            </a>
          </div>
          <div className='w-auto p-1.5'>
            <a href='#'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full border   border-gray-300 hover:border-gray-400'>
                <FaLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
