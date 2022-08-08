import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import ValidationError from '../../Components/ValidationError'
import useForm from '../../Hooks/useForm'

export default function Register({ setLogin }) {
  const navigate = useNavigate()
  const { data, setData, error, processing, post, reset } = useForm({
    name: '',
    email: '',
    password: '',
    repeat_password: '',
  })

  const onHandleChange = (e) => {
    setData(e.target.name, e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const session = await post('user')
    if (session) {
      setLogin(true)
      navigate('/dashboard')
    }
  }

  useEffect(() => {
    return () => {
      reset('password', 'repeat_password')
    }
  }, [error])

  return (
    <div className='bg-gradient-to-tr from-orange-100 via-red-200 to-orange-100 min-h-screen m-0 pt-1 grid gap-0 place-items-center'>
      <div className='flex flex-col w-[95%] max-w-sm mx-2 p-6 bg-slate-200 rounded-xl'>
        <form onSubmit={handleSubmit}>
          <div>
            <Label forInput='name' value='Name' />
            <Input
              name='name'
              value={data.name}
              className={
                `mt-1 block w-full p-2 ` +
                (error.name &&
                  `focus:outline-none ring ring-red-700 focus:ring-red-700`)
              }
              autoComplete='name'
              isFocused={true}
              handleChange={onHandleChange}
            />
            {error.name && <ValidationError err={error.name} />}
          </div>
          <div className='mt-4'>
            <Label forInput='email' value='Email' />
            <Input
              type='email'
              name='email'
              value={data.email}
              className={
                `mt-1 block w-full p-2 ` +
                (error.email &&
                  `focus:outline-none ring ring-red-700 focus:ring-red-700`)
              }
              autoComplete='email'
              handleChange={onHandleChange}
            />
            {error.email && <ValidationError err={error.email} />}
          </div>
          <div className='mt-4'>
            <Label forInput='password' value='Password' />
            <Input
              type='password'
              name='password'
              value={data.password}
              className={
                `mt-1 block w-full p-2 ` +
                (error.password &&
                  `focus:outline-none ring ring-red-700 focus:ring-red-700`)
              }
              autoComplete='password'
              handleChange={onHandleChange}
            />
            {error.password && <ValidationError err={error.password} />}
          </div>
          <div className='mt-4'>
            <Label forInput='repeat_password' value='Confirm Password' />
            <Input
              type='password'
              name='repeat_password'
              value={data.repeat_password}
              className={
                `mt-1 block w-full p-2 ` +
                (error.repeat_password &&
                  `focus:outline-none ring ring-red-700 focus:ring-red-700`)
              }
              autoComplete='repeat_password'
              handleChange={onHandleChange}
            />
            {error.repeat_password && (
              <ValidationError err={error.repeat_password} />
            )}
          </div>
          <div className='flex justify-end items-center gap-5 mt-5 mb-1'>
            <Link to='/login' className='underline italic text-sm'>
              I have an account?
            </Link>
            <Button disabled={processing}>Register</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
