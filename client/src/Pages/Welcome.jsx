import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
      <Link
        to='/login'
        as='button'
        className='px-5 py-2 mx-3 my-2 text-lg font-medium bg-gray-900 text-white rounded-lg shadow-sm'
      >
        Login
      </Link>
      <Link
        to='/register'
        as='button'
        className='px-5 py-2 mx-3 my-2 text-lg font-medium bg-gray-900 text-white rounded-lg shadow-sm'
      >
        Register
      </Link>
      <div>
        Welcome to Authentication with node and react.
      </div>
    </div>
  )
}
