import Button from '../Components/Button'

export default function Dashboard({ auth }) {
  return (
    <div className='min-h-screen flex flex-col justify-start items-center p-5 space-y-5'>
      <div>
        <div className='rounded-xl shadow-xl bg-teal-100 p-2'>
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
        <div className='flex justify-end mt-5'>
          <Button
            className='p-3 bg-gray-600 text-zinc-50'
            onClick={async () => {
              await auth.user.deleteUser()
            }}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}
