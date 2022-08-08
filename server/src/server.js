import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cors from 'cors'
import {
  PORT,
  NODE_ENV,
  MONGO_URI,
  SESS_NAME,
  SESS_SECRET,
  SESS_LIFETIME,
} from '../config'
import errorHandler from './validations/errorhandler'
import { userRouter, sessionRouter } from './routes/index'
;(async () => {
  try {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true })
    console.log('MongoDB connected')

    const app = express()

    app.disable('x-powered-by')
    app.use(
      cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
      })
    )
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(
      session({
        name: SESS_NAME,
        secret: SESS_SECRET,
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({
          mongoUrl: MONGO_URI,
          collection: 'session',
          ttl: parseInt(SESS_LIFETIME) / 1000,
        }),
        cookie: {
          sameSite: true,
          secure: NODE_ENV === 'production',
          maxAge: parseInt(SESS_LIFETIME),
        },
      })
    )

    const apiRouter = express.Router()

    app.use('/api', apiRouter)
    apiRouter.use('/user', userRouter)
    apiRouter.use('/session', sessionRouter)

    app.use(errorHandler)

    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  } catch (err) {
    console.log(err)
  }
})()
