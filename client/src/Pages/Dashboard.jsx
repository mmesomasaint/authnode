import Button from '../Components/Button'
import NavBar from '../Components/NavBar'

export default function Dashboard({ auth }) {
  return (
    <div className='min-h-screen flex flex-col bg-indigo-100 space-y-9'>
      <NavBar
        extraLinks={
          <Button
            className='px-3'
            onClick={async () => {
              await auth.user.deleteUser()
            }}
          >
            Sign Out
          </Button>
        }
      />
      <div className='px-5 flex justify-center'>
        <div className='rounded-xl shadow-xl bg-white p-2'>
          <div className='text-center text-2xl font-bold p-3'>Dashboard</div>
          <div className='p-5 flex flex-col items-center'>
            <span className='text-lg font-semibold uppercase'>
              {auth.user.name}
            </span>
            <span>Congrats, your login was successful</span>
          </div>
          <div className='text-lg font-light p-3 rounded-b-lg '>
            You can see this page because you are logged in
          </div>
        </div>
      </div>
    </div>
  )
}
