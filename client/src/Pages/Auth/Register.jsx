import { useState } from 'react'
import { Link } from 'react-router-dom'
import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import ValidationError from '../../Components/ValidationError'

export default function Register() {
  const [name, setName] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [repeat_password, setRepeatPassword] = useState('')
  const [error, setError] = useState({
    name: '', email: '', password: '', repeat_password: ''
  })

  const onHandleChange = (e) => {
    const t_name = e.target.name 
    t_name === 'name' && setName(e.target.value) 
    t_name === 'email' && setEmail(e.target.value) 
    t_name === 'password' && setPassword(e.target.value) 
    t_name === 'repeat_password' && setRepeatPassword(e.target.value) 
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Label forInput='name' value='Name' />
          <Input
            name='name'
            value={name}
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
            value={email}
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
            value={password}
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
            value={repeat_password}
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
          <Button>Register</Button>
        </div>
      </form>
    </div>
  )
}
