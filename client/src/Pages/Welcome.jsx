import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'

export default function Welcome({ isLoggedIn }) {
  return (
    <div className='min-h-screen flex flex-col bg-indigo-100 space-y-9'>
      <NavBar
        extraLinks={
          <div className='flex justify-between'>
            <Link
              to='/login'
              as='button'
              className='px-2 py-1 mx-1 sm:mx-3 font-medium bg-gray-900 text-white rounded-md shadow-sm'
            >
              Login
            </Link>
            {!isLoggedIn && (
              <Link
                to='/register'
                as='button'
                className='px-2 py-1 mx-1 sm:mx-3 font-medium bg-gray-900 text-white rounded-md shadow-sm'
              >
                Register
              </Link>
            )}
          </div>
        }
      />
      <div className='flex flex-col items-center'>
        <div className='p-5 bg-white rounded-md shadow-lg'>
          <span className='block text-5xl font-extrabold leading-tight text-teal-900 text-center'>
            Welcome!!
          </span>
          <span className='text-lg'>
            Authentication with <span className='italic'>React.js</span> and{' '}
            <span className='italic'>Node.js</span>
          </span>
        </div>
      </div>
    </div>
  )
}
