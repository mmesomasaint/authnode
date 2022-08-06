import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import ValidationError from '../../Components/ValidationError'
import useForm from '../../Hooks/useForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const { data, setData, error, processing, post, reset } = useForm({
    email: '',
    password: '',
  })

  const onHandleChange = (e) => {
    setData(e.target.name, e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await post('session')
    res && navigate('/dashboard')
  }

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [error])

  return (
    <div className="bg-gradient-to-tr from-orange-100 via-red-200 to-orange-100 min-h-screen m-0 pt-1 grid gap-0 place-items-center">
      <div className="flex flex-col w-[95%] max-w-sm mx-2 p-6 bg-slate-200 rounded-xl">
      <form onSubmit={handleSubmit}>
        <div>
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
        <div className='flex justify-end items-center gap-5 mt-5 mb-1'>
          <Button disabled={processing}>Login</Button>
        </div>
      </form>
      </div>
    </div>
  )
}
