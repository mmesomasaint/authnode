export default function Dashboard() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center border'>
      <div className='flex '>Dashboard for logged in users.</div>
      <div>
        You can only be logged in to view this page.
        <span>Congrats, your log in was successful</span>
      </div>
    </div>
  )
}
