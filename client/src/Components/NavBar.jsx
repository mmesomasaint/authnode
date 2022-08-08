export default function ({ extraLinks }) {
  return (
    <div className='flex justify-between p-2 bg-teal-600'>
      <div className='border-2 border-zinc-50 px-1'>
        <span className='text-lg font-medium italic'>auth</span>
        <span className='text-lg text-white font-bold'>NODE</span>
      </div>
      {extraLinks}
    </div>
  )
}
