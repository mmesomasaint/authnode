import express from 'express'
import User from '../models/user'
import { sessionizeUser } from '../util/helpers'

const userRouter = express.Router()

userRouter.post('', async (req, res, next) => {
  try {
    const { name, email, password, repeat_password } = req.body

    const newUser = new User({ name, email, password, repeat_password })
    const sessionUser = sessionizeUser(newUser)
    await newUser.save()

    req.session.user = sessionUser
    console.log(req.session)
    res.send(sessionUser)
  } catch (err) {
    next(err)
  }
})

export default userRouter
