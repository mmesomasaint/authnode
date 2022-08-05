import Label from '../../Components/Label'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import ValidationError from '../../Components/ValidationError'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [error, setError] = useState({email: '', password: ''})

  const onHandleChange = (e) => {
    e.target.name === 'email' && setEmail(e.target.value)
    e.target.name === 'password' && setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div className='flex justify-end items-center gap-5 mt-5 mb-1'>
          <Button>Login</Button>
        </div>
      </form>
    </div>
  )
}
