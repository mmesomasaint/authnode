import express from 'express'
import User from '../models/user'
import { sessionizeUser } from '../util/helpers'
import { SESS_NAME } from '../../config'

const sessionRouter = express.Router()

sessionRouter.post('', async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (user) {
      if (user.comparePasswords(password)) {
        const sessionUser = sessionizeUser(user)
        req.session.user = sessionUser
  
        res.send({ user: sessionUser })
      } else {
        throw new Error('Invalid password', {cause: 'password'})
      }
    } else {
      throw new Error('Invalid email', {cause: 'email'})
    }
  } catch (err) {
    next(err)
  }
})

sessionRouter.delete('', ({ session }, res, next) => {
  try {
    const user = session.user
    if (user) {
      session.destroy((err) => {
        if (err) throw err
        res.clearCookie(SESS_NAME)
        res.send(user)
      })
    } else {
      throw new Error('Something went wrong')
    }
  } catch (err) {
    next(err)
  }
})

sessionRouter.get('', ({ session: { user } }, res) => {
  res.send({ user })
})

export default sessionRouter
