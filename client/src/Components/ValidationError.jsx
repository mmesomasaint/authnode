export default function ValidationError ({ err }) {
  return (
    <div className='text-red-700 text-sm font-medium m-2'>
      <span className='font-extrabold'>&middot; </span>
      {err}
    </div>
  )
}